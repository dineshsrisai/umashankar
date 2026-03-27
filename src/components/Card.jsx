const Card = ({ title, description, image }) => {
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore ➤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
