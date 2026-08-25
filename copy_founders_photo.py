import shutil
import os
from PIL import Image

src = r"C:\Users\Rahul\.gemini\antigravity\brain\a8bc355e-3ff1-4a1f-b1ee-89c9836e0de1\.user_uploaded\media_1787647409644.jpg"
dest_png = r"c:\XAMPP\htdocs\SP financial services\public\images\founders-portrait.png"
dest_jpg = r"c:\XAMPP\htdocs\SP financial services\public\images\founders-portrait.jpg"

os.makedirs(os.path.dirname(dest_png), exist_ok=True)

# Open image with PIL to verify quality and save both as high-res PNG and JPG
img = Image.open(src)
print(f"Original image format: {img.format}, size: {img.size}, mode: {img.mode}")

# Save in pristine high quality
img.save(dest_png, "PNG", optimize=False)
img.save(dest_jpg, "JPEG", quality=98)

print(f"Successfully copied to {dest_png} and {dest_jpg}")
