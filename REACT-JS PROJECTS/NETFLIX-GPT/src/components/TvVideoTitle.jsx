import { FaPlay } from "react-icons/fa";

const TvVideoTitle = ({ name, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-24 bg-gradient-to-r from-black/90 via-black/60 to-transparent text-white z-10 overflow-hidden">
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-tight">
        {name}
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg max-w-full sm:max-w-3xl md:max-w-2xl lg:max-w-xl text-gray-200 leading-relaxed backdrop-blur-[1px] bg-black/10 rounded-md p-2 sm:p-0 line-clamp-3 sm:line-clamp-none">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        <button className="bg-white text-black font-semibold py-2 px-5 sm:py-3 sm:px-7 md:py-3 md:px-9 text-sm sm:text-base md:text-lg rounded-lg transition duration-300 flex items-center hover:scale-105 hover:bg-white/90">
          <FaPlay className="mr-2" /> <span>Play</span>
        </button>

        <button className="bg-gray-700/70 text-white font-semibold py-2 px-5 sm:py-3 sm:px-7 md:py-3 md:px-9 text-sm sm:text-base md:text-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-gray-600/90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TvVideoTitle;
