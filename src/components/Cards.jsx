const Cards = ({ title, description, image }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300 rounded-xl overflow-hidden">
      
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {title}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;