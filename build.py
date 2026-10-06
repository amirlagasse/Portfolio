"""Build the static site from src/. Standard library only.

    python build.py

Adding a project:
  1. Copy src/_template.html to src/pages/<slug>.html and fill it in.
  2. Add an entry to src/projects.json (order there = order on the home page):
       {"slug": "<slug>", "title": "Tile + page title", "dates": "Jan - May, 2026",
        "thumb": "<image in assets/img>", "tab_title": "Short browser tab title"}
     Optional: "footer_gap": px of space above the footer (default 24).
  3. Run the build, open index.html in a browser to check, commit, push.

Writes index.html and projects/<slug>.html. Those are generated: edit src/, not them.
"""
import datetime, hashlib, html, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / 'src'


def version(path):
    # Short content hash for ?v= so browsers fetch the new file right after a push instead of a cached copy
    return hashlib.sha1((ROOT / path).read_bytes()).hexdigest()[:8]


def render(layout, **v):
    v.setdefault('year', datetime.date.today().year)  # site.js also updates it in the browser
    v.setdefault('css_v', version('assets/site.css'))
    v.setdefault('js_v', version('assets/site.js'))
    for k, val in v.items():
        layout = layout.replace('{{' + k + '}}', str(val))
    return layout


def main():
    layout = (SRC / 'layout.html').read_text(encoding='utf8')
    projects = json.loads((SRC / 'projects.json').read_text(encoding='utf8'))
    out_dir = ROOT / 'projects'
    out_dir.mkdir(exist_ok=True)

    missing = [p['slug'] for p in projects if not (SRC / 'pages' / f"{p['slug']}.html").exists()]
    missing += [p['thumb'] for p in projects if not (ROOT / 'assets' / 'img' / p['thumb']).exists()]
    if missing:
        sys.exit('Missing files: ' + ', '.join(missing))

    for p in projects:
        body = (SRC / 'pages' / f"{p['slug']}.html").read_text(encoding='utf8')
        page = render(layout, title=html.escape(p.get('tab_title') or p['title']) + " | Amir's Portfolio",
                      root='../', home_cls='', content=body.rstrip('\n'), footer_gap=p.get('footer_gap', 24))
        (out_dir / f"{p['slug']}.html").write_text(page, encoding='utf8', newline='\n')

    tiles = '\n'.join(
        f'      <a class="tile" href="projects/{p["slug"]}.html"><img src="assets/img/{p["thumb"]}" alt="">'
        f'<span class="cap"><span class="t">{html.escape(p["title"])}</span><span class="d">{html.escape(p["dates"])}</span></span></a>'
        for p in projects)
    home = render((SRC / 'home.html').read_text(encoding='utf8'), gallery=tiles)
    page = render(layout, title="Amir's Portfolio", root='', home_cls=' class="on"', content=home.rstrip('\n'), footer_gap=12)
    (ROOT / 'index.html').write_text(page, encoding='utf8', newline='\n')

    # pages no longer listed in projects.json would otherwise linger
    stale = [f.name for f in out_dir.glob('*.html') if f.stem not in {p['slug'] for p in projects}]
    print(f'Built index.html + {len(projects)} project pages.' + (f' Stale, not in projects.json: {stale}' if stale else ''))


if __name__ == '__main__':
    main()
