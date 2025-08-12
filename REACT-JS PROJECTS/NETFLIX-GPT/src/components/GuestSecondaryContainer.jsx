import { useSelector } from "react-redux";
import TvList from "./TvList";

const GuestSecondaryContainer = () => {
  const tv = useSelector((store) => store?.tv);

  return (
    <div className="bg-black/90 text-white rounded-xl shadow-lg relative z-20 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 mt-8 sm:mt-12 md:mt-16">
      <div className="">
        <TvList title="Popular TV Shows" tv={tv?.popularTvShows} />
      </div>
    </div>
  );
};

export default GuestSecondaryContainer;
