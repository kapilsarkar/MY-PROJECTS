import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!movies || movies.length === 0) {
    return (
      <div className="px-4 sm:px-6 py-4 bg-black text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400">No movies available.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black py-4">
      {/* Title */}
      <h2 className="px-4 sm:px-6 lg:px-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-white tracking-wide">
        {title}
      </h2>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 hover:bg-black/80 rounded-full text-white transition"
      >
        <ChevronLeft size={24} className="lg:size-28" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-black/60 hover:bg-black/80 rounded-full text-white transition"
      >
        <ChevronRight size={24} className="lg:size-28" />
      </button>

      {/* Gradient Edges */}
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-8 lg:w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-8 lg:w-12 bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Movie Scroll Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-6 lg:px-8"
      >
        <div className="flex gap-3 sm:gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              className="flex-shrink-0 w-28 sm:w-40 md:w-48 lg:w-56"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
