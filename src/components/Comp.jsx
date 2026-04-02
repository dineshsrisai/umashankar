import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Comp = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/computer");
        setDevices(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 mx-20 my-10 pb-16">
        {devices.map((item, index) => (
          <Cards
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
