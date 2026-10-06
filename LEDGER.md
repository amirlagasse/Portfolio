# Ledger

| id | task | status | note |
|----|------|--------|------|
| 1 | Access Wix site, scrape all pages (layout, fonts, text, colors) | DONE | 11 pages rendered in headless Edge; per-page JSON + full screenshots |
| 2 | Map home gallery tiles to pages, titles, dates, hover style | DONE | 9 tiles mapped by hover + click |
| 3 | Download all images, videos, PDFs at full quality | DONE | 85 images (originals), 9 videos (best of 1080/720/480p), 2 PDFs; 161 MB, largest file 18 MB; 0 failures |
| 4 | Rebuild as static HTML/CSS for GitHub Pages (no Wix) | DONE | index + 9 project pages; 155 local refs, 0 missing, 0 unused assets; .nojekyll added |
| 5 | Keep formatting as close to the Wix site as possible | DONE | heights at 1440 px within 2 px of Wix on home, Big Kahuna, Chromie, Machining; graphics -52, bathroom -100, tension -26 (font wrap), screenless +133 (squeezed section), NorthIDE restructured; Wix CSS crops (3) and rotation (1) reproduced |
| 6 | Verify every page side by side against Wix screenshots | DONE | all 9 compared at 1440 px; 4 checked at 390 px phone width. YouTube shows black on file://, plays when served |
| 7 | YouTube videos stay YouTube embeds; non-YouTube videos self-hosted | DONE | 4 YouTube iframes, 9 mp4s in assets/video with posters + click-to-play |
| 8 | Cleaner formatting where Wix was weird (NorthIDE spilled off page) | DONE | over-wide sections on NorthIDE + Screenless squeezed into the 980 px column; NorthIDE video full width, steps in 3 columns; checked in screenshots |
| 9 | Make it buildable so new projects are easy to add | DONE | `python build.py` builds from src/projects.json + src/pages/*.html; src/_template.html has every block type; build ran clean |
| 10 | Commit / push to GitHub Pages | DONE | pushed to amirlagasse/Portfolio main; live at amirlagasse.github.io/Portfolio (200 on page, css, video, pdf) |
| 11 | Custom domain | SUPERSEDED | Amir decided not to use a custom domain |
| 12 | Thinner header (45 px) and footer (32 px) | DONE | measured 8 px padding top and bottom; pushed cc53bd4, live |
| 13 | Crop Nasdaq photo to Amir only, no Hadron Energy text, blur collar pin | DONE | assets/img/amir-portrait.jpg 475x690, no Hadron/Nasdaq text in frame; pin covered with lapel fabric (cleaner than blur), checked zoomed; no EXIF |
| 14 | Home hero: text on the left, photo on the right | DONE | 1440 px: text left, 340 px photo right; 390 px: photo stacks above text; screenshots checked |
| 15 | Send screenshots (Amir is on remote control, can't see localhost) | DONE | file send unavailable in this session; published as private artifact 26g114PJkR3qgPGEieoEmm |
| 16 | Rounded corners on hero photo | DONE | 12 px radius, read back from computed style |
| 17 | Re-center Amir in the photo crop (edge of Hadron "y" is OK) | DONE | crop centered on measured body center x=950 (was 58 px off); 420x690 so only a sliver of the "y" shows; pin still covered |
| 19 | Hero photo carousel: professional (default), family, hiking, Ironman | DONE | 4 slides, all 3:4 so height never jumps; next x4 returns to slide 1, prev from 1 wraps to 4; swipe + arrow keys; no EXIF on new photos |
| 20 | Captions on the carousel photos (Ironman one says finisher) | DONE | none on portrait; "My family and I", "Out hiking", "IRONMAN finisher, 2026" (year from the medal) |
| 21 | Rounded corners on all carousel photos; arrows on hover, clearly clickable | DONE | 12 px frame; arrows on hover, always on touch screens; dots under photo; screenshots checked |
| 22 | Hero text: "free time" to "personal time" | DONE | 1 match in built index.html |
| 23 | Rotate helicopter thumbnail so it sits flat, keep background; show screenshot | DONE | heli-level.png rotated 10 deg, corners filled with backdrop gradient, edge feathered; seam checked at 500 px; before/after in preview |
| 24 | Chromie tile: white box, big plus icon top-middle, "Chromie SWAP" underneath | DONE | chromie-tile.png home tile only; project page still uses its original banner (1 ref) |
| 25 | Intro: "student" to "senior (expected Spring 2027)" | DONE | in built index.html; hero screenshot checked, wraps cleanly beside photo |
| 26 | Captions: "Backpacking in the White Mountains"; Ironman 140.6 Ottawa | DONE | both fit on one line in the 340 px frame (screenshot) |
| 27 | Helicopter tile: remove blur near the landing skids | DONE | dropped the feathered edge; padded the backdrop by stretching its edge pixels, rotated, cropped back; skids checked at full res, no seam |
| 28 | Commit and push home page update | DONE | 9808990 pushed; live after ~60 s, captions text and all 4 new images return 200 |
| 29 | Concise README in deslop style; show before committing | IN PROGRESS | written locally, waiting on approval |
| 30 | Desktop showed stacked photos: browser used cached old CSS; version-stamp CSS/JS links | IN PROGRESS | |
| 18 | Copyright year updates automatically | DONE | build.py writes current year; site.js sets it from the visitor's clock; test browser with clock at 2031 showed 2031 |
