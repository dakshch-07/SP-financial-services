import os
import urllib.request
from PIL import Image

OUT_DIR = r"c:\XAMPP\htdocs\SP financial services\public\images"
os.makedirs(OUT_DIR, exist_ok=True)

urls = [
    # 1. Financial District / Corporate Skyline
    ("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop", "hero-bg-1.jpg"),
    # 2. Financial Advisory / Consultation meeting
    ("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop", "hero-bg-2.jpg"),
    # 3. Wealth Investment / Business growth office
    ("https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format&fit=crop", "hero-bg-3.jpg"),
]

headers = {'User-Agent': 'Mozilla/5.0'}

for url, filename in urls:
    dest = os.path.join(OUT_DIR, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded {filename} successfully ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
