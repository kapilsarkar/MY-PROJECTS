import { useSelector } from "react-redux";
import TvList from "./TvList";

const GuestSecondaryContainer = () => {
  const tv = useSelector((store) => store?.tv);
  console.log(tv);
  return (
    <div className="bg-black/90 text-white rounded-lg shadow-lg relative z-20 px-4 sm:px-6 md:px-10 transform -translate-y-12 sm:-translate-y-20 md:-translate-y-28">
      <div className="space-y-8 sm:space-y-12">
        <TvList title="popularTvShows" tv={tv.popularTvShows} />
      </div>
    </div>
  );
};

export default GuestSecondaryContainer;
