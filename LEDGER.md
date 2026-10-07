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
| 29 | Concise README in deslop style; show before committing | DONE | rewritten for visitors per Amir, 0 em dashes, approved, pushed 3b643c9 |
| 30 | Desktop showed stacked photos: browser used cached old CSS; version-stamp CSS/JS links | DONE | server CSS was new (max-age=600 cache); build.py adds ?v=<sha1 8>; checked at 1000 px; pushed 3b643c9, live HTML has ?v=493cf912 |
| 31 | Tile hover: company on top | SUPERSEDED | Amir moved it below the title in the same message |
| 32 | Tile hover: title (no "@ company"), then company bold/colored, then dates | DONE | MagiQ Technologies; MIT Electrochemical Energy Lab x2; Columbia University x3; Personal x2; Chromie Health (from its title); "org" field in projects.json; all 9 overlays screenshotted; not pushed, waiting on approval |
| 33 | Tile hover: dates white like the company line | DONE | screenshot checked |
| 34 | Tile hover: company line bigger, more space from title | DONE | 17 to 20 px; 20 px under title, 6 px to dates; long names left-align beside logo |
| 35 | Logos next to company: MIT, Columbia, MagiQ, Chromie Health | DONE | white silhouettes in assets/img/logos: MIT from Wikimedia SVG, Columbia crown from Wikimedia, MagiQ Q mark from magiqtech.com, Chromie icon from site banner; "logo" field in projects.json; not pushed |
| 36 | MIT tile line looks out of place (logo too big, name wraps): propose fix | DONE | proposal: logo stands in for "MIT", text "Electrochemical Energy Lab", all logos in one fixed box; company line 19 px, 10 px wider than title; logos 24 px tall, MIT capped 36 px wide; all 9 measured one line; not pushed |
| 37 | Commit and push tile company + logos | DONE | db920ac pushed; live after ~60 s with site.css?v=89261827; all 4 logos return 200 |
| 38 | New project from manufacturing final report PDF, 4th tile (others shift down, 10 total) | DONE | race-car-manufacturing page + tile 4; Columbia University, Spring 2026; build shows 10 pages; 0 missing refs; phone width 390 no overflow |
| 39 | Link the renamed PDF like the ANSYS page; pick key text, rewrite goals in site style; use the report images | DONE | assets/docs/race-car-manufacturing-report.pdf; all 16 report images used; numbers only from the report; mixed-shape rows sized to equal heights |
| 40 | Show it in an artifact before commit | DONE | preview v10 published; waiting on approval to push |
| 18 | Copyright year updates automatically | DONE | build.py writes current year; site.js sets it from the visitor's clock; test browser with clock at 2031 showed 2031 |
