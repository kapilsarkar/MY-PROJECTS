const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 bg-gradient-to-r from-black via-transparent to-transparent text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">{title}</h2>
      <p className="py-6 text-lg w-full md:w-2/4 lg:w-1/3 text-gray-200">{overview}</p>
      <div className="space-x-4 mt-4">
        <button className="bg-white hover:bg-opacity-80 text-black font-semibold p-3 px-8 text-lg rounded-lg transition duration-300">
          ▶️ Play
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold p-3 px-8 text-lg rounded-lg transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;