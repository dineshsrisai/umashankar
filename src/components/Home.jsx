import { Link } from "react-router-dom";
import Card from "./Card";
import { Star, Clock, MapPin } from "lucide-react";

const services = [
  {
    title: "Printers Service",
    description: "Printer repair and spare parts replacement",
    image: "/printer.jpg",
    path: "/home/printer",
  },
  {
    title: "Computers & Laptops",
    description: "Computer & Laptop Repair",
    image: "/laptop.avif",
    path: "/home/computer",
  },
  {
    title: "CCTV Installation",
    description: "CCTV installation, wiring, and DVR setup",
    image: "/cccamera.webp",
    path: "/home/cctv",
  },
];

const InfoItem = ({ Icon, text }) => (
  <div className="flex items-center gap-1.5 text-slate-300">
    <Icon className="w-3.5 h-3.5 shrink-0" />
    <span className="text-xs">{text}</span>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">

      <div className="bg-slate-900 py-1.5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-1">
          <InfoItem Icon={Star} text="Since 2015" />
          <span className="hidden sm:block w-px h-3.5 bg-slate-600" />
          <InfoItem Icon={Clock} text="10:00 AM – 10:00 PM" />
          <span className="hidden sm:block w-px h-3.5 bg-slate-600" />
          <InfoItem
            Icon={MapPin}
            text="Abothulavari Street, Palakol – 534260"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Our Services
          </h1>
          <div className="mx-auto w-12 h-0.5 bg-blue-700 rounded-full" />
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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