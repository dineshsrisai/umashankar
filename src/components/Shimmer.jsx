const ShimmerCard = ({ large }) => (
  <div className={`shimmer-card ${large ? "shimmer-large" : "shimmer-small"}`}>
    <div className="shimmer-image" />
    <div className="shimmer-line long" />
    <div className="shimmer-line short" />
  </div>
);

export default ShimmerCard;
