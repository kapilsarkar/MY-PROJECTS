import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="px-6 py-4 bg-black text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-gray-400">No movies available.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-4 bg-black">
      <h2 className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
        {title}
      </h2>
      <div className=" flex overflow-x-scroll scroll-smooth pb-2 bg-black">
        {/* Scrollable horizontal list */}
        <div className="flex gap-4 bg-black">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
