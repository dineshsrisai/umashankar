import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const services = [
    {
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
      path: "/printer",
    },
    {
      title: "Computers and Laptops Service",
      description: "Repair & maintenance solutions",
      image: "/laptop.avif",
      path: "/computer",
    },
    {
      title: "CCTV Installation and Services",
      description: "Security systems for home & business",
      image: "/cccamera.webp",
      path: "/cctv",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Services
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => (
          <Link to={item.path} key={index}>
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;