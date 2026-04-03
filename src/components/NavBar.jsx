import { useState } from "react";
import { Link } from "react-router-dom";
import { phoneNumber, message } from "../utils/constants";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        
        <Link
          to="/"
          className="text-base sm:text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors leading-tight"
        >
          <span className="hidden sm:inline">
            UmaShankar Printers & Solutions
          </span>
          <span className="sm:hidden">UmaShankar P&S</span>
        </Link>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
        >
          Contact Us
        </a>

        <button
          className="sm:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-slate-100 px-4 py-3 flex flex-col gap-3">
          
          <Link
            to="/printer"
            className="text-sm font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Printers Service
          </Link>

          <Link
            to="/computer"
            className="text-sm font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Computers & Laptops
          </Link>

          <Link
            to="/cctv"
            className="text-sm font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            CCTV Installation
          </Link>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;