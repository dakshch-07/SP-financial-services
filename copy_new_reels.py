import os
from PIL import Image

OUT_DIR = r"c:\XAMPP\htdocs\SP financial services\public\images\reels"
os.makedirs(OUT_DIR, exist_ok=True)

files = [
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648322928.jpg", "reel-lic-pension-1lakh.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648349169.jpg", "reel-lic-amritbaal.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648344992.jpg", "reel-fd-vs-swp.jpg"),
    (r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787648309806.jpg", "reel-first-salary.jpg"),
]

for src, name in files:
    dest = os.path.join(OUT_DIR, name)
    img = Image.open(src)
    img.save(dest, "JPEG", quality=95)
    print(f"Saved {name}: {img.size}")
