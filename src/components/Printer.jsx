import { useEffect, useState } from "react";
import Cards from "./Cards";
import ShimmerCard from "./Shimmer";
import axios from "axios";

const Printer = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://umashankar-be.onrender.com/printer",
        );
        setDevices(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const featured = devices.filter((d) => d.featured);
  const regular = devices.filter((d) => !d.featured);

  if (loading) {
    return (
      <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 pb-16">
        <div className="mb-10">
          <div className="h-5 bg-slate-200 rounded w-40 mb-2 animate-pulse" />
          <div className="h-3 bg-slate-200 rounded w-64 mb-4 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ShimmerCard large />
            <ShimmerCard large />
          </div>
        </div>

        <div>
          <div className="h-5 bg-slate-200 rounded w-40 mb-2 animate-pulse" />
          <div className="h-3 bg-slate-200 rounded w-64 mb-4 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </div>
        </div>
      </div>
    );
  }

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
