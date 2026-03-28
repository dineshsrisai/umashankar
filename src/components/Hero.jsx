import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/23534042/pexels-photo-23534042.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        {/* Increased width container */}
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold text-center whitespace-nowrap">
            Welcome! Discover Our Range of Services
          </h1>

          <button
            className="btn btn-primary btn-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200"
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
