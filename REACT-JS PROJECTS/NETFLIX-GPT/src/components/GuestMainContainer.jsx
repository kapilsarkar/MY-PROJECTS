import { useSelector } from "react-redux";
import VideoBackGroundTv from "./VideoBackGroundTv";
import TvVideoTitle from "./TvVideoTitle";

const GuestMainContainer = () => {
  const tv = useSelector((store) => store.tv?.popularTvShows);

  if (!tv || tv.length === 0) return null;

  const mainTv = tv[0] || {};
  const { original_name = "No Title", overview = "", id } = mainTv;

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <VideoBackGroundTv tvId={id} />
      <TvVideoTitle name={original_name} overview={overview} />
    </div>
  );
};

export default GuestMainContainer;
