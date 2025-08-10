import { useSelector } from "react-redux";
import useTvTrailer from "../hooks/useTvTrailer";

const VideoBackGroundTv = ({ tvId }) => {
  const trailerVideo = useSelector((store) => store.tv?.trailerVideo);

  useTvTrailer(tvId);

  // Debug: check if key exists
  console.log("Trailer Video:", trailerVideo);

  if (!trailerVideo?.key) return null; // No trailer, don't render iframe

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-full aspect-video border-none block"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGroundTv;
