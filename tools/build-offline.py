#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build a fully-standalone OFFLINE copy of the ALC site.

The live site relies on Vercel (extensionless clean URLs, an absolute
/audio/ path, a service worker). This script produces an `offline/` folder
that runs by opening index.html directly in a browser — no server, no
internet — which is what lab machines with no connectivity need.

Usage (from the repo root, on any computer that has the repo + Python 3):

    python tools/build-offline.py

Then copy the generated `offline/` folder to a USB stick and, on each lab
device, open `offline/index.html` in Chrome or Edge. Everything works
offline except the YouTube listening videos.
"""
import os, re, shutil, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST  = os.path.join(ROOT, 'offline')

def main():
    if os.path.exists(DST):
        shutil.rmtree(DST)
    os.makedirs(DST)

    # ---- copy the pieces the offline build needs ----
    for f in glob.glob(os.path.join(ROOT, '*.html')):
        shutil.copy(f, DST)
    for d in ['css', 'js', 'audio']:
        src = os.path.join(ROOT, d)
        if os.path.isdir(src):
            shutil.copytree(src, os.path.join(DST, d))
    for pat in ['*.png', '*.webp', '*.jpg', '*.ico', 'manifest.json']:
        for f in glob.glob(os.path.join(ROOT, pat)):
            shutil.copy(f, DST)

    # ---- rewrite HTML for file:// ----
    for f in glob.glob(os.path.join(DST, '*.html')):
        s = open(f, encoding='utf-8').read()
        s = s.replace('href="/"', 'href="index.html"')                 # home / all-books
        s = re.sub(r'href="(book[0-9a-z\-]+|grammar)"', r'href="\1.html"', s)  # page links
        s = re.sub(r"href:'(book[0-9]+)'", r"href:'\1.html'", s)        # index BOOKS registry
        s = s.replace("navigator.serviceWorker.register('sw.js')", "void 0")   # no SW on file://
        open(f, 'w', encoding='utf-8').write(s)

    # ---- rewrite the engine: absolute audio path + home navigation ----
    eng = os.path.join(DST, 'js', 'engine-core.js')
    s = open(eng, encoding='utf-8').read()
    s = s.replace("new Audio('/audio/en/'", "new Audio('audio/en/'")
    s = s.replace("location.href='/'", "location.href='index.html'")
    open(eng, 'w', encoding='utf-8').write(s)

    # ---- short readme for the person setting up the lab ----
    readme = (
        "ALC — نسخة العمل بلا إنترنت (Offline)\n"
        "=====================================\n\n"
        "على كل جهاز:\n"
        "1) انسخ هذا المجلد بالكامل إلى الجهاز (أو شغّله من الـUSB).\n"
        "2) افتح ملف  index.html  بمتصفّح Chrome أو Edge.\n"
        "3) تصفّح الكتب والدروس والتمارين والتقييم — يعمل بلا إنترنت.\n\n"
        "يعمل بلا إنترنت: الدروس، المفردات، القواعد، التمارين، التقييم،\n"
        "المراجعة، الاختبار الشامل، وصوت النطق (اضغط زر السمّاعة).\n"
        "يحتاج إنترنت (لن يعمل): فيديوهات الاستماع (يوتيوب).\n"
    )
    open(os.path.join(DST, 'اقرأني-README.txt'), 'w', encoding='utf-8').write(readme)

    n_html = len(glob.glob(os.path.join(DST, '*.html')))
    n_mp3  = len(glob.glob(os.path.join(DST, 'audio', 'en', '*.mp3')))
    print(f"Built offline/ : {n_html} pages, {n_mp3} audio clips.")
    print("Copy the 'offline' folder to a USB stick and open offline/index.html on each device.")

if __name__ == '__main__':
    main()
