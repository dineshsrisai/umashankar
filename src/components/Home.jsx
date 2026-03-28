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
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
  ];

  return (
    <div className="grid grid-wrap justify-center gap-6 mx-20 my-10 pb-15">
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
  );
};

export default Home;
