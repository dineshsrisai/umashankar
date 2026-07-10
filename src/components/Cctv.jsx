import { useEffect, useState } from "react";
import Cards from "./Cards";
import ShimmerCard from "./Shimmer";
import axios from "axios";

const Cctv = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://umashankar-be.onrender.com/cctv");
        setDevices(data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 pb-16">
        <div className="h-5 bg-slate-200 rounded w-40 mb-2 animate-pulse" />
        <div className="h-3 bg-slate-200 rounded w-56 mb-6 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ShimmerCard /> <ShimmerCard /> <ShimmerCard /> <ShimmerCard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8 pb-16">
      <h2 className="text-lg font-bold text-slate-800 mb-1">CCTV Installation</h2>
      <p className="text-sm font-semibold text-slate-500 mb-6">
        Cameras, wiring, DVR setup and accessories
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {devices.map((item, index) => (
          <Cards key={index} title={item.title} description={item.description} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Cctv;