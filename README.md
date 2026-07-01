# Tips & Tricks by Master Hammad

A complete responsive gaming tips website for children and young teens aged 8–15. Built with React and Tailwind CSS v4.

## Description

This project is a modern gaming website featuring a dark console-style theme, neon highlights, smooth animations, and a kid-friendly design. It includes beginner guides, game tips, safe gaming advice, and top game lists, all tailored for a young audience (ages 8-15) and parent-approved.

## Tech Stack

- **React 19**
- **Vite** (Build Tool)
- **TypeScript**
- **Tailwind CSS v4**
- **React Router v7**
- **Lucide React** (Icons)

## How to Install

1. Make sure you have Node.js installed (v18+ recommended).
2. Clone this repository or download the source code.
3. Open a terminal in the project root directory and run:

```bash
npm install
```

## How to Run Locally

To start the development server:

```bash
npm run dev
```

The website will usually be available at `http://localhost:5173`.

## How to Build

To create a production-ready build:

```bash
npm run build
```

The compiled output will be placed in the `dist` directory.

## How to Deploy to Firebase

1. Install Firebase CLI globally if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to your Firebase account:
   ```bash
   firebase login
   ```
3. Initialize Firebase in your project root:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project.
   - Set the public directory to `dist`.
   - Configure as a single-page app (Rewrite all urls to `/index.html`? **Yes**).
   - Set up automatic builds and deploys with GitHub? **Optional (No for manual)**.
   - Overwrite `dist/index.html`? **No**.
4. Build the project:
   ```bash
   npm run build
   ```
5. Deploy to Firebase Hosting:
   ```bash
   firebase deploy
   ```

## How to Push to GitHub (and use GitHub Pages)

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub and link it:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### GitHub Pages Note
To host on GitHub pages, you may need to update the `base` path in `vite.config.ts` if your repository is not the root domain (e.g., `base: '/your-repo-name/'`).
You can use the `gh-pages` npm package or configure GitHub Actions to deploy the `dist` folder automatically.
