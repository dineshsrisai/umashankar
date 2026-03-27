import Card from "./Card";

const Home = () => {
  const services = [
    {
      title: "Printers Service",
      description: "High quality flex printing",
      image:"./printer.jpg"
    },
    {
      title: "Computers and Laptops Service ",
      description: "Custom banners",
      image: "./laptop.avif",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "./cccamera.webp",
    },
  ];
  return (
    <div className="grid grid-wrap gap-6 justify-center mx-20 my-10 pb-15">
      {services.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
