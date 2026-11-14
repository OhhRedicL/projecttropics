# Project Tropics Roleplay — Website

A modern, futuristic static website for **Project Tropics Roleplay**, a Los Angeles FiveM community.
No build step is needed: it is plain HTML, CSS and JavaScript and can be hosted anywhere (GitHub Pages, Netlify, Cloudflare Pages, etc.).

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Departments (LAPD, LASD, CHP, LA Communications, Civilian Operations, DOT) | `departments.html` |
| Applications (tabbed, one tab per department + staff) | `applications.html` |
| Community Rules (searchable) | `rules.html` |
| Resources (connect guide, documents, 10-codes, FAQ) | `resources.html` |
| Photo Gallery (filterable with lightbox) | `gallery.html` |

The header (with the glowing Discord button) and footer are shared across every page and live in `assets/js/main.js`.

## Quick setup

1. **Links**: open `assets/js/config.js` and set:
   - `discordInvite`: your Discord invite (used by every Discord button)
   - `connectCommand` / `fivemJoinUrl`: your cfx.re join code
   - `cfxCode`: just the code from your cfx.re link. When set, the home page shows live server status and player count
   - `applications`: links to each department's application form
   - `applicationsOpen`: set a department to `false` to mark it **Closed**
2. **Gallery**: put screenshots in `assets/img/gallery/` and add `src` to entries in `assets/js/gallery-data.js`.
3. **Resource documents**: in `resources.html`, replace the `href="#"` on the document cards with links to your Penal Code, SOPs, etc.
4. **Content**: review the department divisions, requirements and rules, and edit them to match your community.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Brand colors

`#F6B057` · `#FCBD3D` · `#000000` · `#DE5FB9`. They are defined as CSS variables at the top of `assets/css/style.css`.
