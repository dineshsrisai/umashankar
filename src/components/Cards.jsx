import { phoneNumber } from "../utils/constants";

const Cards = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-md transition duration-300 rounded-xl overflow-hidden w-72">
      <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4 mix-blend-multiply hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-base font-semibold text-slate-900 mb-1">{title}</h2>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi, I'm interested in: ${title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
};

export default Cards;
