const Card = ({ title, description, image }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 rounded-xl overflow-hidden">
      <figure className="bg-white p-4">
        <img
          src={image}
          alt={title}
          className="h-40 object-contain mx-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {title}
        </h2>
        <p className="text-sm text-white">
          {description}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm rounded-full px-4">
            Explore ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;