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
| 10 | Commit / push to GitHub Pages | BLOCKED | folder is not a git repo yet; needs Amir's go-ahead and repo name |
