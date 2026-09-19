#!/usr/bin/env python3
"""Stelt site.html samen uit de losse delen en zet alle niet-ASCII tekens om
naar escapes, zodat de pagina onafhankelijk van de charset correct rendert."""
import re, sys

import os
BASE = os.path.dirname(os.path.abspath(__file__)) + '/'
PARTS = ['game.part1.html', 'game.part2.html', 'game.part3.html']

def js_escape(text):
    out = []
    for ch in text:
        o = ord(ch)
        if o < 128:
            out.append(ch)
        elif o <= 0xFFFF:
            out.append('\\u%04x' % o)
        else:                                  # buiten de BMP -> surrogaatpaar
            v = o - 0x10000
            out.append('\\u%04x\\u%04x' % (0xD800 + (v >> 10), 0xDC00 + (v & 0x3FF)))
    return ''.join(out)

def html_escape(text):
    return ''.join(ch if ord(ch) < 128 else '&#%d;' % ord(ch) for ch in text)

def css_clean(text):
    # niet-ASCII komt in de CSS alleen in commentaar voor; vervang door ASCII
    repl = {'è':'e','é':'e','ê':'e','—':'-','’':"'",'ë':'e'}
    for a, b in repl.items():
        text = text.replace(a, b)
    leftover = [c for c in text if ord(c) > 127]
    if leftover:
        sys.exit('niet-ASCII in CSS: %r' % sorted(set(leftover)))
    return text

body = ''.join(open(BASE + p, encoding='utf-8').read() for p in PARTS)
sprites = open(BASE + 'sprites.js', encoding='utf-8').read()
doc = body.replace('/*__SPRITES__*/', sprites)

# opsplitsen in style- / script- / html-stukken en per soort escapen
pattern = re.compile(r'(<style>.*?</style>|<script>.*?</script>)', re.S)
pieces = pattern.split(doc)
result = []
for piece in pieces:
    if piece.startswith('<style>'):
        result.append(css_clean(piece))
    elif piece.startswith('<script>'):
        result.append(js_escape(piece))
    else:
        result.append(html_escape(piece))
out = ''.join(result)

bad = [c for c in out if ord(c) > 127]
if bad:
    sys.exit('er staan nog niet-ASCII tekens in: %r' % sorted(set(bad)))

open(BASE + 'index.html', 'w', encoding='ascii').write(out)
print('index.html gebouwd:', len(out), 'bytes, volledig ASCII')
