const Card = ({ title, description, image }) => {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-base-200 border border-white/5 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/20">
      <div className="aspect-[4/3] bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-base text-white leading-snug">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>

        <div className="pt-1">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
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
