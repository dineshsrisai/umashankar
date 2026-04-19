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
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 pb-16">
      <h2 className="text-lg font-bold text-slate-800 mb-1">
        Computers & Laptops
      </h2>
      <p className="text-sm font-semibold text-slate-500 mb-6">
        Hardware repair, upgrades and replacement services
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
