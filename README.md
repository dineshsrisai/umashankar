# UmaShankar Printers & Solutions

A responsive, full-stack service business website for printer repair, computer/laptop repair, and CCTV installation services based in Palakol, Andhra Pradesh.

---

## Tech Stack

**Frontend**
- [React](https://react.dev/) (Vite)
- [React Router DOM](https://reactrouter.com/) — client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Lucide React](https://lucide.dev/) — icons
- [Axios](https://axios-http.com/) — HTTP requests

**Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) — single collection with a `type` enum field

---

## Project Structure

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
│   │   ├── Cards.jsx         # Product card with WhatsApp enquiry button
│   │   ├── Printer.jsx       # Printer products listing page
│   │   ├── Comp.jsx          # Computer & Laptop products listing page
│   │   └── Cctv.jsx          # CCTV products listing page
│   ├── utils/
│   │   └── constants.js      # Phone number and WhatsApp message
│   ├── App.jsx               # Router setup
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
```

---

## Routes

| Path        | Component  | Description                          |
|-------------|------------|--------------------------------------|
| `/hero`     | `Hero`     | Full-screen landing page             |
| `/`         | `Home`     | Services grid (Printers, Laptops, CCTV) |
| `/printer`  | `Printer`  | Printer products and repair services |
| `/computer` | `Comp`     | Computer & laptop repair products    |
| `/cctv`     | `Cctv`     | CCTV installation products           |

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB running locally or a MongoDB Atlas URI

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/umashankar-printers.git
cd umashankar-printers

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Setup

Create a `.env` file in the `server/` directory:

### Running the App

```bash
# Start the backend (from /server)
npm start

# Start the frontend (from /client)
npm run dev
```

The frontend runs at `http://localhost:5173` and the backend API at `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint    | Description                  |
|--------|-------------|------------------------------|
| GET    | `/printer`  | Fetch all printer products   |
| GET    | `/computer` | Fetch all computer products  |
| GET    | `/cctv`     | Fetch all CCTV products      |

Each endpoint returns an array of objects:

```json
[
  {
    "title": "HP LaserJet 1020",
    "description": "Monochrome laser printer, ideal for office use.",
    "image": "https://..."
  }
]
```

The backend uses a **single MongoDB collection** with a `type` field (`"printer"`, `"computer"`, `"cctv"`) filtered per route via `req.params.type` or hardcoded route handlers.

---

## Responsive Design

The UI is fully responsive using a **mobile-first** Tailwind approach:

- **Mobile** — single-column card grid, hamburger nav menu
- **Tablet (`sm:`)** — two-column grid, full navbar
- **Laptop (`lg:`)** — three-column grid
- **Large screens (`xl:`)** — four-column grid on product pages

---

## Contact

**UmaShankar Printers & Solutions**  
15-6-19 Abothulavari Street, Palakol – 534260  
Hours: 10:00 AM – 10:00 PM, All Days  
WhatsApp: [Chat with us](https://wa.me/91XXXXXXXXXX)