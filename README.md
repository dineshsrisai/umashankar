# UmaShankar Printers & Solutions — Frontend

A responsive React frontend for a service business website covering printer repair, computer/laptop repair, and CCTV installation services based in Palakol, Andhra Pradesh.

🌐 **Live Demo:** [soon](#)

---

## ✨ Features

- **Modern & Responsive UI** — Built with a mobile-first approach using Tailwind CSS
- **Client-Side Routing** — Seamless navigation using React Router DOM
- **Direct WhatsApp Integration** — Contact Us button in NavBar pre-filled with a dynamic message
- **Featured Service Highlights** — Featured cards visually distinct from regular product cards

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) — Fast, modern frontend tooling
- [React Router DOM](https://reactrouter.com/) — Client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling framework
- [Lucide React](https://lucide.dev/) — Clean, consistent iconography
- [Axios](https://axios-http.com/) — Promise-based HTTP client

---

## 📁 Project Structure

```
├── public/
│   ├── printer.jpg
│   ├── laptop.avif
│   └── cccamera.webp
├── src/
│   ├── components/
│   │   ├── Body.jsx          # Layout wrapper (NavBar + Outlet + Footer)
│   │   ├── NavBar.jsx        # Top navigation with hamburger menu
│   │   ├── Footer.jsx        # Footer with links and contact info
│   │   ├── Hero.jsx          # Full-screen landing hero page
│   │   ├── Home.jsx          # Services grid (main landing)
│   │   ├── Card.jsx          # Service card (used on Home)
│   │   ├── Cards.jsx         # Product card with optional Featured badge
│   │   ├── Printer.jsx       # Printer page (Featured + regular sections)
│   │   ├── Comp.jsx          # Computer & Laptop products listing page
│   │   └── Cctv.jsx          # CCTV products listing page
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── .env                      # Environment variables (do not commit)
├── .env.example              # Template for environment variables
└── .gitignore
```

---

## 🚦 Routes

| Path             | Component | Description                             |
| ---------------- | --------- | --------------------------------------- |
| `/`              | `Hero`    | Full-screen landing page                |
| `/home`          | `Home`    | Services grid (Printers, Laptops, CCTV) |
| `/home/printer`  | `Printer` | Printer products and repair services    |
| `/home/computer` | `Comp`    | Computer & laptop repair products       |
| `/home/cctv`     | `Cctv`    | CCTV installation products              |

> The `/home/printer`, `/home/computer`, and `/home/cctv` routes are nested under `/home` as relative child routes inside `App.jsx`.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root (next to `vite.config.js`):

```env
VITE_MOBILE=919912512597
VITE_MESSAGE=Hi, I am looking for repair/service for my printer/computer/CCTV system. Could you please help me with the details?
```

| Variable       | Description                                             |
| -------------- | ------------------------------------------------------- |
| `VITE_MOBILE`  | WhatsApp number with country code, no `+` or spaces     |
| `VITE_MESSAGE` | Default WhatsApp message shown in NavBar contact button |

> Vite only exposes variables prefixed with `VITE_` to the browser. Access them via `import.meta.env`.

### `.env.example`

```env
VITE_MOBILE=
VITE_MESSAGE=
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/dineshsrisai/umashankar-printers.git
cd umashankar-printers

# Install dependencies
npm install

# Start the dev server
npm run dev
```

- Frontend: `http://localhost:5173`

> After editing `.env`, restart the dev server — environment changes do not hot-reload.

---

## ⭐ Exclusive (Featured) Cards

Products with `featured: true` in the database appear in a dedicated **"Exclusive"** section at the top of the page with a blue-tinted card style and an **"Exclusive"** badge. Regular products render below in the standard grid.

Currently featured under Printer Services:

| Title            | Description              |
| ---------------- | ------------------------ |
| Passbook Printer | Bank passbook specialist |
| TVS Dot Matrix   | Built for bulk invoicing |

---

## 📱 Responsive Design

| Breakpoint     | Grid Columns | Navigation     |
| -------------- | ------------ | -------------- |
| Mobile < 640px | 1 column     | Hamburger menu |
| `sm:` 640px+   | 2 columns    | Full navbar    |
| `lg:` 1024px+  | 3 columns    | Full navbar    |
| `xl:` 1280px+  | 4 columns    | Full navbar    |

> Exclusive/featured cards always render in a 2-column grid (`grid-cols-1 sm:grid-cols-2`) regardless of breakpoint.

---

## 🛑 .gitignore

```
node_modules/
dist/
.env
```

---

## 📞 Contact

**UmaShankar Printers & Solutions**
📍 15-6-19 Abothulavari Street, Palakol – 534260, Andhra Pradesh, India
🕒 Hours: 10:00 AM – 10:00 PM, Monday-Saturday
