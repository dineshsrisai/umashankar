import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 gap-3 sm:gap-0">
          <span className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
            UmaShankar Printers & Solutions
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug">
            Welcome! Explore Our Expert Repair & Installation Services
          </h1>

          <button
            className="cursor-pointer px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-base sm:text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/home")}
          >
            Get Started ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
