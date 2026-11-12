# Distressed Forge Labs

A responsive, one-page static landing site built with plain HTML, CSS, and a small amount of JavaScript. There is no build step or backend.

## Stack

- Static HTML/CSS/JS. No framework, no backend, no database.
- Build command: none.
- Output / publish directory: the repository root (the folder containing `index.html`).

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Upload the repository contents to any static host (nginx on the VPS, Cloudflare Pages, Netlify). Leave the build command empty and serve the repo root.

## Signup integration

The email signup currently runs only in the browser and does not store or send addresses. In `index.html`, replace the form's placeholder `action="#updates"` with the endpoint URL from a provider such as Formspree or Buttondown, and adjust the submit handling in `script.js`.

## Assets (`assets/`)

- `logo-tagline.png`: logo lockup with tagline, used in the hero and social metadata.
- `logo-original.png`: original icon and wordmark, used in the footer.
- `forge-mark.png`: cropped mark used in the header.
- `favicon.png`: favicon.
