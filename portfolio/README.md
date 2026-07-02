# Adamya Mehta — Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. Theme: **Midnight Copper**.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Configure the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages
without a backend. Until configured it will show a friendly error and point
visitors to your email directly — the site works fine without this step.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with `name`, `email`, and `message` variables,
   and note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Open `src/constants/emailjs.js` and replace the three placeholder values.

## Project structure

```
src/
  assets/images/     — project screenshots + portrait, imported via index.js
  components/        — one folder per section, matches the site layout
  hooks/             — scroll direction/progress, typing effect, count-up, mouse position
  utils/              — small helpers (className join, smooth scroll)
  data/content.js    — ALL resume content lives here — edit this to update copy
  constants/         — animation variants + EmailJS config
```

## Updating content

Everything text-based (summary, projects, experience, education, skills) is
in `src/data/content.js`. Nothing is hardcoded in components — edit that file
and the whole site updates.

## Swapping images

Screenshots live in `src/assets/images/` and are wired up in
`src/assets/images/index.js`. To swap a project screenshot, replace the file
and keep the same filename, or update the import + key in `index.js`.

## Resume file

`public/Adamya_Mehta_Resume.pdf` is served for the Navbar/Hero/Footer
"Download Resume" buttons. Replace this file to update what visitors
download.
