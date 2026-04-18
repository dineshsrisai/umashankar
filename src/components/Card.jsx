const Card = ({ title, description, image }) => {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="h-48 bg-white overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-base text-slate-900 leading-snug">
            {title}
          </h2>
          <p className="text-sm opacity-70 font-semibold text-slate-700 mt-1 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="pt-1">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 group-hover:text-blue-800 transition-colors">
            Explore
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
