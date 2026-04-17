# UmaShankar Printers & Solutions

A responsive, full-stack service business website for printer repair, computer/laptop repair, and CCTV installation services based in Palakol, Andhra Pradesh.

🌐 **Live Demo:** [soon](#)

---

## ✨ Features

- **Modern & Responsive UI** — Built with a mobile-first approach using Tailwind CSS
- **Client-Side Routing** — Seamless navigation using React Router DOM
- **Direct WhatsApp Integration** — Contact Us button in NavBar pre-filled with a dynamic message
- **Full-Stack Architecture** — Powered by a robust Node.js/Express backend
- **Optimized Database** — Single MongoDB collection utilizing a `type` field for efficient querying

---

## 🛠️ Tech Stack

**Frontend**

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) — Fast, modern frontend tooling
- [React Router DOM](https://reactrouter.com/) — Client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling framework
- [Lucide React](https://lucide.dev/) — Clean, consistent iconography
- [Axios](https://axios-http.com/) — Promise-based HTTP client

**Backend**

- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — Fast, unopinionated server framework
- [MongoDB](https://www.mongodb.com/) — NoSQL database (single collection with a `type` field)

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
│   │   ├── Cards.jsx         # Product card (used on service pages)
│   │   ├── Printer.jsx       # Printer products listing page
│   │   ├── Comp.jsx          # Computer & Laptop products listing page
│   │   └── Cctv.jsx          # CCTV products listing page
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── server/                   # Backend application (Express & MongoDB)
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

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB running locally or a MongoDB Atlas URI

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/umashankar-printers.git
cd umashankar-printers

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

---

## ⚙️ Environment Variables

### Frontend — create `.env` in the project root (next to `vite.config.js`)

```env
VITE_MOBILE=919912512597
VITE_MESSAGE=Hi, I am looking for repair/service for my printer/computer/CCTV system. Could you please help me with the details?
```

| Variable       | Description                                             |
| -------------- | ------------------------------------------------------- |
| `VITE_MOBILE`  | WhatsApp number with country code, no `+` or spaces     |
| `VITE_MESSAGE` | Default WhatsApp message shown in NavBar contact button |

> Vite only exposes variables prefixed with `VITE_` to the browser. Access them via `import.meta.env`.

### Backend — create `.env` inside the `/server` folder

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/umashankar
```


```env
# Frontend (.env in root)
VITE_MOBILE=
VITE_MESSAGE=

# Backend (.env in /server)
PORT=
MONGO_URI=
```

---

## 🏃 Running the Application

```bash
# Start the backend (from /server)
npm start

# Start the frontend (from project root)
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

> After editing any `.env` file, restart the dev servers — environment changes do not hot-reload.

---

## 📡 API Endpoints

The backend uses a single MongoDB collection filtered by the `type` field (`"printer"`, `"computer"`, `"cctv"`) per route.

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| GET    | `/printer`  | Fetch all printer products  |
| GET    | `/computer` | Fetch all computer products |
| GET    | `/cctv`     | Fetch all CCTV products     |

**Sample Response:**

```json
[
  {
    "title": "HP LaserJet 1020",
    "description": "Monochrome laser printer, ideal for office use.",
    "image": "https://example.com/image.jpg",
    "type": "printer"
  }
]
```

---

## 📱 Responsive Design

| Breakpoint     | Grid Columns | Navigation     |
| -------------- | ------------ | -------------- |
| Mobile < 640px | 1 column     | Hamburger menu |
| `sm:` 640px+   | 2 columns    | Full navbar    |
| `lg:` 1024px+  | 3 columns    | Full navbar    |
| `xl:` 1280px+  | 4 columns    | Full navbar    |

---

## 🛑 .gitignore

```
# Dependencies
node_modules/

# Build files
dist/

# Environment variables
.env
```

---

## 📞 Contact

**UmaShankar Printers & Solutions**
📍 15-6-19 Abothulavari Street, Palakol – 534260, Andhra Pradesh, India
🕒 Hours: 10:00 AM – 10:00 PM, All Days