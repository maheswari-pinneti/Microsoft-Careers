# 🎯 Microsoft Careers Hub – Freshers Edition (Clone)

A modern frontend project inspired by Microsoft’s Fluent UI, built using **HTML** and **Tailwind CSS**. This clone focuses on delivering a responsive and accessible career portal for freshers and early-career professionals.

---

## 🚀 Features

- ✅ **HTML5** – Clean semantic structure
- 🎨 **Tailwind CSS** – Utility-first framework for rapid UI design
- 🧩 **Custom Components** – Buttons, cards, grids, and layout blocks
- 📱 **Responsive Design** – Mobile-first approach for every screen size
- ♿ **Accessibility** – ARIA labels, focus management, screen reader support
- 🔵 **Microsoft Styling** – Acrylic backgrounds, depth effects, Fluent UI palette

---

## 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm or yarn

---

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/maheswari-pinneti/microsoft-careers-clone.git
cd microsoft-careers-clone
````

Install dependencies:

```bash
npm install
# or
yarn install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
```

---

## 📁 Project Structure

```
microsoft-careers-clone/
├── css/
│   ├── tailwind.css       # Tailwind source with custom styles
│   └── main.css           # Compiled CSS file
├── pages/                 # HTML pages (modular)
├── index.html             # Homepage entry
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS setup
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🎨 Styling

* Fully styled using **Tailwind CSS** with added utility classes
* Mimics **Microsoft Fluent UI** using shadows, gradients, and glassmorphism
* Accessible fonts, colors, and spacing

---

## 🧩 Customization

To update theme, breakpoints, or components:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        microsoftBlue: '#0078D4',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
}
```

---

## 📦 Build for Production

Optimize the CSS output:

```bash
npm run build:css
# or
yarn build:css
```

This will generate a minified `main.css` file.

---

## 📱 Responsive Design

Tailwind’s breakpoints used:

* `sm` → 640px+
* `md` → 768px+
* `lg` → 1024px+
* `xl` → 1280px+
* `2xl` → 1536px+

Tested on mobile, tablet, and desktop.

---

## 🗂️ Project Index

| Page                     | Description                 |
| ------------------------ | --------------------------- |
| `index.html`             | Career Discovery Hub (Home) |
| `pages/freshers.html`    | Freshers Career Launch      |
| `pages/roles.html`       | Role Discovery Engine       |
| `pages/dashboard.html`   | Application Dashboard       |
| `pages/culture.html`     | Culture Experience Center   |
| `pages/development.html` | Career Development Hub      |

---

## 🔭 Roadmap

* [x] Complete core layout with Tailwind
* [x] Add interactive hover effects
* [ ] Add animations using AOS or Framer Motion
* [ ] Integrate backend using Flask or Node.js
* [ ] Deploy on Netlify or Vercel

---

## 🤝 Contribution

Contributions are welcome!
Feel free to fork the repo, open issues, or submit a pull request.

---

## 📄 License

MIT License © 2025 [Maheswari Pinneti](https://github.com/maheswari-pinneti)

---

## 🙏 Acknowledgements

* Inspired by Microsoft Careers Portal
* Designed using [Tailwind CSS](https://tailwindcss.com/)
* Built with ❤️ by [Maheswari Pinneti](https://www.linkedin.com/in/maheswari-pinneti/)

---

