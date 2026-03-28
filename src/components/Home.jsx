import { Link } from "react-router-dom";
import Card from "./Card";

const services = [
  {
    title: "Printers Service",
    description: "High quality flex printing",
    image: "/printer.jpg",
    path: "/printer",
  },
  {
    title: "Computers & Laptops",
    description: "Repair & maintenance solutions",
    image: "/laptop.avif",
    path: "/computer",
  },
  {
    title: "CCTV Installation",
    description: "Security systems for home & business",
    image: "/cccamera.webp",
    path: "/cctv",
  },
];

const InfoItem = ({ emoji, text }) => (
  <div className="flex items-center gap-2 text-gray-300">
    <span className="text-lg">{emoji}</span>
    <span className="text-sm font-medium tracking-wide">{text}</span>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-base-300 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          <InfoItem emoji="⭐" text="Since 2015" />
          <span className="hidden sm:block w-px h-5 bg-white/10" />
          <InfoItem emoji="🕙" text="10:00 AM – 10:00 PM" />
          <span className="hidden sm:block w-px h-5 bg-white/10" />
          <InfoItem
            emoji="📍"
            text="15-6-19 Abothulavari Street, Palakol – 534260"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Our Services
          </h1>
          <div className="mx-auto w-12 h-0.5 bg-indigo-500 rounded-full" />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Link to={item.path} key={index} className="block">
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
