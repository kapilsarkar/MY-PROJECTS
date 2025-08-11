import TvCard from "./TvCard";

const TvList = ({ title, tv }) => {
  if (!tv || tv.length === 0) {
    return (
      <div className="px-4 sm:px-6 py-4 bg-black text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-400">No TV shows available.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black py-4">
      {/* Section title */}
      <h2 className="px-4 sm:px-6 lg:px-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white tracking-wide capitalize">
        {title}
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8">
        {tv.map((item) => (
          <TvCard
            key={item.id}
            posterPath={item.poster_path}
            className="flex-shrink-0 w-28 sm:w-40 md:w-48 lg:w-56 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default TvList;
