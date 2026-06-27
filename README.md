# The Visual Atelier Portfolio Site

A polished, GitHub Pages-ready static portfolio for **Jerk T. Villamor**.

## What is included

```txt
visual-atelier-portfolio/
├─ index.html
├─ styles.css
├─ script.js
├─ assets/
└─ README.md
```

## Main features

- Cinematic studio opening
- Clear transition from **The Visual Atelier** to the person behind it
- Responsive desktop and mobile layout
- Scroll-based reveal animations
- Interactive process stepper
- Expandable capability pillar wall
- Before/after image refinement placeholder slider
- Tabbed “Images That Sell” section
- Continuous work presentation sections
- Contact buttons for email, phone, and Google Drive portfolio

## Where to replace images

The current version uses visual placeholders because no actual images were supplied yet. Replace them inside `index.html` or add real files to the `assets/` folder.

Suggested asset names:

```txt
assets/personal-photo.jpg
assets/product-visual-01.jpg
assets/ad-creative-01.jpg
assets/listing-image-01.jpg
assets/before-after-before.jpg
assets/before-after-after.jpg
assets/branded-visual-01.jpg
```

Example replacement:

```html
<div class="portrait-placeholder" role="img" aria-label="Photo placeholder — personal photo">
  <span>Photo placeholder</span>
  <strong>personal photo</strong>
</div>
```

Replace with:

```html
<img class="portrait-image" src="assets/personal-photo.jpg" alt="Jerk T. Villamor">
```

You may need to add CSS for `.portrait-image` if using an actual `<img>` element.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.
7. GitHub will generate your live site URL.

## Notes

- The site uses Google Fonts through external links in `index.html`.
- The content is preserved from the provided portfolio draft. No fake metrics, fake case studies, or invented client claims were added.
- The contact CTA links to the provided Google Drive portfolio folder.
