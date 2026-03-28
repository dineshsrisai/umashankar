import Card from "./Card";

const Printer = () => {
  const services = [
    {
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
    },
    {
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
    },{
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
    },{
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
    },
    {
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
    },{
      title: "Printers Service",
      description: "High quality flex printing",
      image: "/printer.jpg",
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

export default Printer;
