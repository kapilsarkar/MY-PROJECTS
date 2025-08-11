import { useSelector } from "react-redux";
import useTvTrailer from "../hooks/useTvTrailer";

const VideoBackGroundTv = ({ tvId }) => {
  const trailerVideo = useSelector((store) => store.tv?.trailerVideo);

  useTvTrailer(tvId);

  console.log("Trailer Video:", trailerVideo);

  

  return (
    <div className="relative z-0 w-full overflow-hidden">
      <iframe className="w-full aspect-video border-none block"  src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default VideoBackGroundTv;
