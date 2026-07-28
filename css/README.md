# css/

This folder is intentionally empty in the base template.

All styling in this project is handled by **Tailwind CSS (via CDN)** plus a
small amount of inline `<style>` in `index.html` and `404.html` for things
Tailwind's utility classes can't express (custom keyframes, the `.reveal`
scroll-animation state, and the `.skill-badge` component class).

If you outgrow the CDN build and move to a compiled Tailwind setup (via the
Tailwind CLI or PostCSS), this is where your generated stylesheet would live
— for example `css/styles.css`, linked from `<head>` in place of the CDN
`<script>` tag. See the "Optimization Pass" section of the root `README.md`
for more on that tradeoff.
