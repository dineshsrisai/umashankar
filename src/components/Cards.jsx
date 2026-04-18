const Cards = ({ title, description, image, featured }) => {
  return (
    <div
      className={`flex flex-col border rounded-xl overflow-hidden w-full transition duration-300
      ${
        featured
          ? "bg-blue-50 border-blue-300 shadow-md hover:shadow-lg"
          : "bg-white border-slate-200 shadow-sm hover:shadow-md"
      }`}
    >
      <div
        className={`relative h-44 sm:h-48 flex items-center justify-center overflow-hidden
        ${featured ? "bg-blue-50" : "bg-white"}`}
      >
        {featured && (
          <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-semibold px-2.5 py-1 rounded-br-lg">
            Featured
          </span>
        )}

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
        <p className="text-xs opacity-70 font-semibold sm:text-sm text-slate-700 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
