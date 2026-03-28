const Cards = ({ title, description, image }) => {
  return (
    <div className="py-15 card bg-base-100 shadow-md hover:shadow-lg transition duration-300 rounded-xl overflow-hidden w-80">
      <figure className="h-48 overflow-hidden bg-base-200 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {title}
        </h2>
        <p className="text-black leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;