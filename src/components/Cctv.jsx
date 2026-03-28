import Card from "./Card";

const Cctv = () => {
  const services = [
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
    },
    {
      title: "CCTV Installation and Services",
      description: "Professional business cards",
      image: "/cccamera.webp",
      path: "/cc",
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

export default Cctv;
