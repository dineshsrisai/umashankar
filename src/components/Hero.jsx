import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .hero-nav .navbar {
          background: transparent !important;
        }
        .hero-nav .btn-ghost:hover {
          background: transparent !important;
        }
        .hero-nav .navbar,
        .hero-nav .btn-ghost,
        .hero-nav a {
            color: white !important;
        }
      `}</style>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/23534042/pexels-photo-23534042.jpeg)",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-nav absolute top-2 left-0 right-0 z-10">
          <Navbar />
        </div>

        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-5 text-3xl md:text-3xl font-bold text-center whitespace-nowrap">
              Welcome! Explore Our Expert Repair & Installation Services
            </h1>
            <button
              className="my-4 btn btn-primary btn-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => navigate("/")}
            >
              Get Started ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
