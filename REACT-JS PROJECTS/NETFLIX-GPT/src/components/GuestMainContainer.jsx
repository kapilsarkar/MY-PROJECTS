import { useSelector } from "react-redux";
import VideoBackGroundTv from "./VideoBackGroundTv";

const GuestMainContainer = () => {
  const tv = useSelector((store) => store.tv?.popularTvShows);
  if (!tv) return null;
  const mainTv = tv[0];
  const { original_name, overview, id } = mainTv;

  return (
    <div className="w-full h-full overflow-x-hidden relative">
      <p>{original_name}</p>
      <p>{overview}</p>
      <p>{id}</p>
      <VideoBackGroundTv tvId={id} />
    </div>
  );
};

export default GuestMainContainer;
