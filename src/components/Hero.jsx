import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/23534042/pexels-photo-23534042.jpeg)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar on top */}
      <div className="relative z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-xl font-bold text-white">
            UmaShankar Printers & Solutions
          </span>
          <a
            href="/"
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Welcome! Explore Our Expert Repair & Installation Services
          </h1>
          <button
            className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/")}
          >
            Get Started ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;