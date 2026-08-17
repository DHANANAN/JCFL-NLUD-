import os
import re

img_masthead = '<img src="https://i.ibb.co/23fPdtdF/OPv-Xht-Cx.jpg" data-logo alt="CCLGFL NLU Delhi" class="masthead-logo" width="56" height="56">'
img_footer = '<img src="https://i.ibb.co/23fPdtdF/OPv-Xht-Cx.jpg" data-logo alt="CCLGFL NLU Delhi" class="footer-logo" width="46" height="46" loading="lazy">'
img_large = '<img src="https://i.ibb.co/23fPdtdF/OPv-Xht-Cx.jpg" data-logo alt="CCLGFL" class="cclgfl-logo-large" width="140" height="140">'

masthead_pattern = re.compile(r'<div class="emblem-frame"[^>]*>\s*<div class="emblem-frame-inner">\s*<span class="emblem-frame-sig"[^>]*>JCFL</span>\s*<span class="emblem-frame-sub"[^>]*>NLU DELHI</span>\s*</div>\s*</div>')
footer_pattern = re.compile(r'<div class="emblem-frame"[^>]*>\s*<div class="emblem-frame-inner">\s*<span class="emblem-frame-sig"[^>]*>JCFL</span>\s*<span class="emblem-frame-sub"[^>]*>CCLGFL</span>\s*</div>\s*</div>')
large_pattern = re.compile(r'<div class="emblem-frame-large"[^>]*>\s*<div class="emblem-frame-inner">\s*<span class="emblem-frame-sig"[^>]*>CCLGFL</span>\s*<span class="emblem-frame-sub"[^>]*>CENTRE FOR CORPORATE LAW</span>\s*</div>\s*</div>')

for f in os.listdir('.'):
    if f.endswith('.html'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        content = masthead_pattern.sub(img_masthead, content)
        content = footer_pattern.sub(img_footer, content)
        content = large_pattern.sub(img_large, content)
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
print("Replaced frames with logos.")
