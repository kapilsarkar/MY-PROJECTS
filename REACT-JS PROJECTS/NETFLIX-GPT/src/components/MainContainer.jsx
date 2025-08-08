import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //Early return or if the movie is not preset then return null
  const mainMovie = movies[0];
  //console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  );
};

export default MainContainer;
