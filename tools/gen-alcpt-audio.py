#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Regenerate the ALCPT simulation listening clips (audio/alcpt/<id>.mp3).

Each clip is the whole item exactly as the student hears it: the speakers'
lines (man / woman / narrator) with short pauses, then the spoken question.
The page plays these clips; device speech synthesis is only a fallback.

Voices: Kokoro-82M (Apache-2.0), run locally with onnxruntime.
  man = am_michael · woman = af_heart · narrator = af_bella

Setup (once):
    pip install kokoro-onnx soundfile
    npm pack kokoro-q8-shards@1.0.0 kokoro-local-runtime@0.1.0
    # join the model shards (sha256 fbae9257…a1478):
    cat package/kokoro-q8.part{0..5}.bin > kokoro-q8.onnx
    # pack the voice .bin files from kokoro-local-runtime/voices into voices.npz
    # (see pack_voices() below)

Usage (repo root):
    node -e 'const fs=require("fs");eval(fs.readFileSync("js/data-alcpt.js","utf8").replace(/^const /gm,"var "));fs.writeFileSync("alcpt-items.json",JSON.stringify(ALCPT_LISTEN.map(x=>({id:x.id,say:x.say,q:x.q||null}))))'
    python tools/gen-alcpt-audio.py MODEL_DIR alcpt-items.json audio/alcpt

Item ids are positional (L0, L1, …): if you insert or reorder listening
items in js/data-alcpt.js, regenerate every clip.
"""
import glob, json, os, subprocess, sys
import numpy as np, soundfile as sf

VOICES = {'m': 'am_michael', 'f': 'af_heart', 'n': 'af_bella'}
SR = 24000
SPEED = 0.92

def pack_voices(voice_dir, out_npz):
    v = {os.path.basename(f)[:-4]: np.fromfile(f, dtype=np.float32).reshape(-1, 1, 256)
         for f in glob.glob(os.path.join(voice_dir, '*.bin'))}
    np.savez(out_npz, **v)

def main(model_dir, items_json, out_dir):
    from kokoro_onnx import Kokoro
    k = Kokoro(os.path.join(model_dir, 'kokoro-q8.onnx'), os.path.join(model_dir, 'voices.npz'))
    os.makedirs(out_dir, exist_ok=True)
    sil = lambda s: np.zeros(int(SR * s), dtype=np.float32)
    for it in json.load(open(items_json, encoding='utf-8')):
        parts = [sil(0.25)]
        for i, (who, txt) in enumerate(it['say']):
            if i:
                parts.append(sil(0.55))
            a, sr = k.create(txt, voice=VOICES[who], speed=SPEED, lang='en-us')
            parts.append(a.astype(np.float32))
        if it.get('q'):
            parts.append(sil(0.9))
            a, _ = k.create(it['q'], voice=VOICES['n'], speed=SPEED, lang='en-us')
            parts.append(a.astype(np.float32))
        parts.append(sil(0.3))
        w = np.concatenate(parts)
        w = w / max(np.abs(w).max(), 1e-9) * 0.89
        wav = os.path.join(out_dir, it['id'] + '.wav')
        sf.write(wav, w, SR)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-ar', str(SR),
                        '-b:a', '64k', os.path.join(out_dir, it['id'] + '.mp3')], check=True)
        os.remove(wav)
        print(it['id'], round(len(w) / SR, 1), 's')

if __name__ == '__main__':
    main(*sys.argv[1:4])
