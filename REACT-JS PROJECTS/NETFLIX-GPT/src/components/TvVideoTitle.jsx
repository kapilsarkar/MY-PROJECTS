import { FaPlay } from "react-icons/fa";

const TvVideoTitle = ({ name, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full aspect-video pt-[10%] sm:pt-[15%] md:pt-[20%] px-4 sm:px-8 md:px-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent text-white z-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
        {name}
      </h2>

      <p className="py-4 text-sm sm:text-base md:text-lg max-w-full sm:max-w-3xl md:max-w-2xl lg:max-w-xl text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3 mt-4">
        <button className="bg-white text-black font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-lg transition duration-300 flex items-center hover:bg-white/80">
          <FaPlay className="mr-2" /> <span>Play</span>
        </button>

        <button className="bg-gray-700/70 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 text-sm sm:text-base md:text-lg rounded-lg transition duration-300 hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TvVideoTitle;
