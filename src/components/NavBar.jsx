import { Link } from "react-router-dom";
import { phoneNumber, message } from "../utils/constants";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">UmaShankar Printers & Solutions</Link>
      </div>
      <a
        className="flex flex-wrap cursor-pointer"
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn btn-primary mr-4">Contact Us</button>
      </a>
    </div>
  );
};

export default NavBar;
