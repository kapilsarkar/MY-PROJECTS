import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Tending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      {/* 
    MovieList : Popular
      MovieCards *n 
    MovieList : Now Playing
    MovieList : Trending
    MovieList: Horror

     */}
    </div>
  );
};

export default SecondaryContainer;
