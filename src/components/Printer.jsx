import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Printer = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/printer");
        setDevices(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const featured = devices.filter((d) => d.featured);
  const regular = devices.filter((d) => !d.featured);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 pb-16">
      {featured.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-1">
            Featured Services
          </h2>
          <p className="text-sm font-semibold text-slate-500 mb-4">
            Specialist services we are known for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featured.map((item, index) => (
              <Cards
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                featured={true}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-1">
          Products & Repairs
        </h2>
        <p className="text-sm font-semibold text-slate-500 mb-4">
          Spare parts, consumables and repair services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {regular.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Printer;
