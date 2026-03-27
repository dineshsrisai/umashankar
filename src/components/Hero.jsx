import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen  from-primary to-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="w-full text-center text-4xl font-bold tracking-tight text-base-content whitespace-nowrap">
            Welcome! Discover Our Range of Services
          </h1>
          <button
            className="my-5 mx-auto block btn btn-primary btn-lg text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200"
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
