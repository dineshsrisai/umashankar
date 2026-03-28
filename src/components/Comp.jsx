import Card from "./Card";

const Comp = () => {
  const services = [
    {
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },{
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },{
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },{
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },{
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },{
      title: "Computers and Laptops Service",
      description: "Custom banners",
      image: "/laptop.avif",
      path: "/comp",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 mx-20 my-10 pb-15">
        {services.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Comp;
