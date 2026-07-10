const ShimmerCard = ({ large }) => {
  return (
    <div
      className={`relative rounded-xl border border-slate-200 bg-white overflow-hidden animate-pulse ${
        large ? "h-[280px]" : "h-[220px]"
      }`}
    >
      {large && (
        <div className="absolute top-3 left-3 h-5 w-16 bg-slate-300 rounded-full" />
      )}
      <div
        className={`w-full bg-slate-200 ${large ? "h-[185px]" : "h-[130px]"}`}
      />
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="h-4 bg-slate-200 rounded w-3/5" />
        <div className="h-3 bg-slate-200 rounded w-4/5" />
      </div>
    </div>
  );
};

export default ShimmerCard;
