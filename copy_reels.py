import os
import shutil
from PIL import Image

OUT_DIR = r"c:\XAMPP\htdocs\SP financial services\public\images\reels"
os.makedirs(OUT_DIR, exist_ok=True)

files = [
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648202357.jpg", "reel-mediclaim-warning.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648202355.jpg", "reel-mutual-funds-5-reasons.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648202384.jpg", "reel-mediclaim-youth.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648202392.jpg", "reel-topup-sip.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648202459.jpg", "reel-why-choose-professional.jpg"),
]

for src, name in files:
    dest = os.path.join(OUT_DIR, name)
    img = Image.open(src)
    # Save optimized copy
    img.save(dest, "JPEG", quality=95)
    print(f"Saved {name}: {img.size}")
