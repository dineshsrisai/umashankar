const Cards = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-md transition duration-300 rounded-xl overflow-hidden w-full">
      <div className="h-44 sm:h-48 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-4 mix-blend-multiply hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
          {title}
        </h2>

        <p className="text-xs font-semibold sm:text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
