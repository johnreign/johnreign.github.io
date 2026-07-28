<div align="center">

# 🚀 Portfolio Website Template

**A production-ready, zero-build personal portfolio built with HTML5 + Tailwind CSS.**
Populated as a real example with John Reignel Bajao's professional profile — fork it and swap in your own.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-e34f26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![No Build Step](https://img.shields.io/badge/Build%20Step-None%20required-4f46e5)](#-getting-started)
[![Deploy: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](#-deploy-to-github-pages)

[Live Demo](#) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📖 Overview

This repository is a **single-page portfolio template** for software engineers, implementation specialists, solutions consultants, and other technical professionals. It's built with plain **HTML5** and **Tailwind CSS (via CDN)** — no npm install, no build step, no framework. Clone it, edit the text, open `index.html`, and it works.

The content currently in the template is a real, populated example (not lorem ipsum) profiling **John Reignel Bajao**, a Senior AI Automation & Integration Specialist — so you can see exactly how a finished section should look before you replace it with your own information. Every placeholder that still needs personal input is clearly marked (see [Placeholders to Update](#-placeholders-to-update)).

---

## ✨ Features

- 🖥️ Fully responsive — mobile, tablet, laptop, desktop
- 🌗 Dark mode with system-preference detection + manual toggle (persisted)
- 🧭 Sticky nav with active-section highlighting, shadow-on-scroll, and a mobile hamburger menu
- 🎯 Smooth, offset-aware scrolling with keyboard-focus handling
- 🎬 Scroll-triggered reveal animations that respect `prefers-reduced-motion` and degrade gracefully without JavaScript
- 🕒 Visual "growth path" timeline for showing career progression within one company
- 🏷️ Categorized, hoverable technical skill badges
- 🏅 Certification cards with clearly marked placeholder fields
- ✉️ Front-end contact form, ready to wire up to a backend or form service
- 🎨 Inline SVG icon sprite (no icon library / font dependency)
- ⬆️ Back-to-top button
- ♿ Semantic HTML5, ARIA labels, visible focus states, skip-to-content link — see [Accessibility](#-accessibility--seo--performance)
- 🔍 SEO-ready: meta tags, Open Graph, Twitter Card, JSON-LD structured data, `sitemap.xml`, `robots.txt`
- 🧩 GitHub Pages-ready out of the box: `404.html`, favicons, and no build configuration required

---

## 🖼️ Preview

> Add a screenshot or GIF of your deployed site here once you've customized it — this is one of the highest-impact things you can do for a portfolio repo's first impression.
>
> ```md
> ![Portfolio preview](assets/images/preview.png)
> ```

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html               # Main site — all sections live here
├── 404.html                  # Branded not-found page (auto-served by GitHub Pages)
├── robots.txt                 # Search engine crawl rules
├── sitemap.xml                 # Sitemap for search engines
├── LICENSE                      # MIT License (code only — see note below)
├── .gitignore                    # OS / editor / tooling ignores
│
├── assets/
│   ├── images/
│   │   ├── profile-photo.jpg      # [Replace] Your professional photo
│   │   └── og-cover.jpg           # [Replace] Social share preview image (1200×630)
│   ├── icons/
│   │   ├── favicon.ico            # [Replace] Multi-size favicon
│   │   ├── favicon-16.png         # [Replace]
│   │   ├── favicon-32.png         # [Replace]
│   │   ├── favicon-512.png        # [Replace]
│   │   └── apple-touch-icon.png   # [Replace] iOS home-screen icon (180×180)
│   └── resume.pdf                 # [Replace] Downloadable resume PDF
│
├── css/
│   └── README.md              # Notes on where a compiled stylesheet would go, if you add one later
│
├── js/
│   └── script.js              # All interactivity (nav, dark mode, animations, form, etc.)
│
└── README.md                  # This file
```

> All placeholder assets (favicons, `og-cover.jpg`, `profile-photo.jpg`, `resume.pdf`) are **already valid, working files** — generated so the site never shows broken images or dead links out of the box. Replace them with your real assets before publishing.

---

## 🚀 Getting Started

### Run it locally

No installation required:

```bash
git clone https://github.com/<your-username>/portfolio-website.git
cd portfolio-website
open index.html    # macOS
# or just double-click index.html in your file explorer
```

For a slightly more realistic local environment (recommended, avoids some browser file:// quirks):

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 🛠 How to Customize

### 1. Replace the professional photo
Save your photo as `assets/images/profile-photo.jpg` (square, ideally 500×500px or larger). The `<img>` tag in the Hero section already points here — no code changes needed.

### 2. Add your resume PDF
Replace `assets/resume.pdf` with your real resume. The **Download Resume** button already links to this path.

### 3. Replace favicons & social preview image
Replace the files in `assets/icons/` (favicon.ico, favicon-16.png, favicon-32.png, favicon-512.png, apple-touch-icon.png) and `assets/images/og-cover.jpg` with your own branding. Tools like [RealFaviconGenerator](https://realfavicongenerator.net/) can generate a matching set from a single source image.

### 4. Update social & contact links
Search `index.html` for these placeholders and replace with your real URLs:

| Placeholder | Location(s) |
|---|---|
| `[Your LinkedIn URL]` | Contact section, Footer |
| `[Your GitHub URL]` | Contact section, Footer |
| `[Your Portfolio URL]` | Contact section |

Email and phone are already populated and clickable (`mailto:` / `tel:`).

### 5. Update SEO / social preview URLs
Once you know your live URL, replace every instance of `https://your-portfolio-url.example.com` in `index.html`, `404.html`, `robots.txt`, and `sitemap.xml` with your actual GitHub Pages (or custom domain) URL.

---

## 💼 How to Update Work Experience

Each job is a single `<article>` inside the **Experience** section (`id="experience"`).

1. Find the `<!-- Timeline Item -->` comment for the company you want to edit.
2. Edit company name, title, dates, location, and `<li>` bullets directly.
3. To add a **new company**, copy an entire `<article class="reveal relative pl-16 ...">...</article>` block and update its content.
4. To add a **new role at an existing company**, copy one of the inner "Role" `<div>` blocks inside the growth-path track.
5. Replace the `LOGO` placeholder `<div>` with a real `<img>` once you have a company logo.

---

## 🧰 How to Edit Technical Skills

Inside the **Tech Stack** section (`id="tech-stack"`), each skill is:

```html
<span class="skill-badge">Your Skill Name</span>
```

Add/remove these inside the relevant category card's `<div class="flex flex-wrap gap-2">`. To add a new category, duplicate an existing category `<div>` (icon, heading, badge container) and edit its contents.

---

## 🏅 How to Update Certifications

Each certification is a card inside `id="certifications"`. Update the name, issuer, date, and credential ID directly, and point the **Verify Credential** link at the real verification URL.

---

## 🌐 Deploy to GitHub Pages

This repo is pre-configured to work with GitHub Pages with **zero build steps**.

1. Push this repository to GitHub (see [Git Commands](#-git-commands-if-setting-up-manually) below if you're starting from scratch).
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish your site at:
   ```
   https://<your-username>.github.io/portfolio-website/
   ```
   (This can take a minute or two on the first deploy.)
6. Update `robots.txt`, `sitemap.xml`, and the `canonical`/`og:url` meta tags in `index.html` with this real URL.

### Using a custom domain
Add a `CNAME` file to the repository root containing just your domain (e.g. `johnbajao.dev`), then configure your DNS provider with a `CNAME` record pointing to `<your-username>.github.io`. GitHub's docs: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Alternative hosts

**Netlify**
1. [netlify.com](https://www.netlify.com) → **Add new site → Deploy manually** (drag the folder in), or connect the GitHub repo for continuous deployment.
2. Live instantly at `https://your-site-name.netlify.app`; add a custom domain under **Site settings → Domain management**.

**Vercel**
1. [vercel.com](https://vercel.com) → **Add New → Project** → import the GitHub repo.
2. Framework Preset: `Other`. Leave the build command empty (static site, no build step).
3. Deploy — live at `https://your-project.vercel.app`.

---

## 🧾 Git Commands (if setting up manually)

If you're not using GitHub's web upload UI and want to push this from your machine:

```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit: portfolio website template"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio-website.git
git push -u origin main
```

Then follow the [Deploy to GitHub Pages](#-deploy-to-github-pages) steps above.

---

## ♿ Accessibility / SEO / Performance

This template has been audited and hardened across four dimensions — details below so future edits don't accidentally regress them.

<details>
<summary><strong>Accessibility (WCAG)</strong></summary>

- Text contrast audited: label/date text meets the WCAG AA 4.5:1 minimum against its background in both light and dark mode.
- Scroll-reveal animations are a true progressive enhancement: content is visible by default and only hidden pre-animation when JavaScript is confirmed running (`html.js` class). If JS fails to load, nothing is hidden.
- `prefers-reduced-motion` disables scroll-reveal and ambient floating/pulsing decorations.
- Mobile menu closes on <kbd>Escape</kbd> and returns focus to its trigger button; `aria-expanded` stays in sync.
- Active nav link uses `aria-current="page"`.
- Clicking a nav link moves keyboard/screen-reader focus to the target section, not just the scroll position.
- Contact details use a semantic `<address>`; Footer links use a labeled `<nav>`.
- Experience/certification dates use `<time datetime="YYYY-MM">`.
- Skip-to-content link, visible focus rings, and `aria-label`s on icon-only controls throughout.

</details>

<details>
<summary><strong>SEO</strong></summary>

- `robots` meta, canonical `<link>`, Open Graph + Twitter Card tags with explicit image dimensions.
- JSON-LD `Person` structured data describing name, role, employer, education, and skills.
- `sitemap.xml` and `robots.txt` included at the repo root (GitHub Pages serves root files directly).
- Single `<h1>`, clean heading hierarchy throughout.

</details>

<details>
<summary><strong>Performance</strong></summary>

- Hero photo (the page's Largest Contentful Paint element) loads eagerly with `fetchpriority="high"` — not lazy-loaded, since it's above the fold.
- Google Fonts weight list trimmed to only the weights actually used.
- Sticky-header shadow and back-to-top visibility share a single `requestAnimationFrame`-throttled scroll listener.
- Active-section highlighting uses `IntersectionObserver` (no scroll-listener cost).
- **Production note:** this template loads Tailwind from the Play CDN for zero-build simplicity. For a production deployment where every millisecond matters, consider migrating to the [Tailwind CLI or PostCSS build](https://tailwindcss.com/docs/installation) to ship a small, pre-purged CSS file — no HTML changes required to adopt this later.

</details>

<details>
<summary><strong>Maintainability</strong></summary>

- Repeated inline SVG icons (LinkedIn, GitHub, Mail, Globe) are defined once in an `<svg>` sprite (`<symbol>` elements) after `<body>` and reused via `<use href="#icon-name" />`.
- Section comments (`<!-- Hero Section -->`, etc.) throughout `index.html` for quick navigation.

</details>

---

## 📝 Placeholders to Update

Before publishing, search the project for these markers:

- `assets/images/profile-photo.jpg`, `assets/images/og-cover.jpg` — replace with real images
- `assets/icons/*` — replace favicon set with your own branding
- `assets/resume.pdf` — replace with your real resume
- `[Your LinkedIn URL]`, `[Your GitHub URL]`, `[Your Portfolio URL]` — in `index.html`
- `[Date Earned]`, `[Credential ID]`, `[Issuing Organization]` — certification cards
- `https://your-portfolio-url.example.com` — in `index.html`, `404.html`, `robots.txt`, `sitemap.xml`
- Contact form (`js/script.js`) — currently front-end only; connect to a real backend or form service (e.g. [Formspree](https://formspree.io/), [Netlify Forms](https://docs.netlify.com/forms/setup/)) to actually receive submissions

---

## 🧾 Content & License

This repository is dual in nature:

- **The template itself** (HTML structure, Tailwind styling, JavaScript behavior) is licensed under the [MIT License](./LICENSE) — use it, fork it, strip out the example content, and build your own portfolio on top of it.
- **The example content** (John Reignel Bajao's name, resume details, work history, and any photo) is personal information included only to demonstrate a fully populated template, and is **not** covered by the MIT License. If you fork this repo, replace all personal content with your own before publishing.

All experience, skills, and certifications in the example content reflect a real resume. No employers, dates, tools, or credentials were invented; unspecified fields (certification issue dates, credential IDs, social profile URLs) are left as clearly marked placeholders rather than fabricated.

---

## 🤝 Contributing

Found a bug in the template, or have an accessibility/performance improvement? Issues and pull requests are welcome — please keep contributions focused on the **template itself**, not the example personal content.

---

<div align="center">

Built with HTML5 &amp; Tailwind CSS · [MIT Licensed](./LICENSE)

</div>
