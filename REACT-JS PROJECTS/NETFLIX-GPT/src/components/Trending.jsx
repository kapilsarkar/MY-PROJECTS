import { useSelector } from "react-redux";
import useTrending from "../hooks/useTrending";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const trending = useSelector((store) => store?.trending);
  console.log(trending);
  useTrending();
  return (
    <div className="w-full py-2 px-3 bg-black text-white">
      <h2 className="mt-2 text-3xl p-3 font-bold text-white">Trending Shows</h2>
      <div className=" flex py-3 justify-center">
        <TrendingCard  trending={trending?.nowTrending} />
      </div>
    </div>
  );
};

export default Trending;
