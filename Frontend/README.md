# RK Mission School Website

A responsive marketing website for RK Mission School built with **React + TypeScript** and powered by **Vite** and **Tailwind CSS**. The site includes pre-built pages and UI components for showcasing school information such as academics, activities, facilities, admissions, and more.

---

## 🚀 Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Testing:** Vitest

---

## 🎯 Features

- Fully responsive layout for desktop and mobile
- Modular component architecture using reusable UI primitives
- Pre-built pages: Home, About, Academics, Activities, Admissions, Gallery, FAQ, Contact, etc.
- Custom UI components for cards, accordions, carousels, dialogs, and more
- Easy theming and style overrides via Tailwind

---

## 🧰 Getting Started

### Prerequisites

- Node.js (recommended latest LTS)
- npm or yarn (or bun if you prefer)

### Install

```bash
npm install
# or
# yarn install
# bun install
```

### Run in Development

```bash
npm run dev
```

Then open the app in your browser at `http://localhost:5173` (or whatever Vite prints).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm test
```

---

## 📁 Project Structure

```
src/
  App.tsx              # Application root
  main.tsx             # Client entry point
  pages/               # Full pages for routing
  components/          # Reusable component library
    layout/            # Header/Footer/Layout
    home/              # Home page sections
    ui/                # UI primitives and shared widgets
  hooks/               # Custom React hooks
  lib/                 # Utility functions
```

---

## 🛠️ Customization

- Tailwind configuration: `tailwind.config.ts`
- Vite configuration: `vite.config.ts`
- Global styles: `src/index.css` and `src/App.css`

---

## 📦 Deployment

This project produces a static build output in the `dist/` folder. You can deploy it to any static hosting service such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome`)
3. Commit your changes (`git commit -m "feat: ..."`)
4. Push to your branch (`git push origin feature/awesome`)
5. Open a pull request

---

## 📄 License

This project does not include a license file. Add one if you intend to open source it.
