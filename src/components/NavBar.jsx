import { Link } from "react-router-dom";
import { phoneNumber, message } from "../utils/constants";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b border-slate-200">
      <Link to="/" className="text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors">
        UmaShankar Printers & Solutions
      </Link>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200">
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default NavBar;