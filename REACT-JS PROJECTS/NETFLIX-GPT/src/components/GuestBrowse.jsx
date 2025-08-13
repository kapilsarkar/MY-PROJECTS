import { useNavigate } from "react-router";
import usePopularTvShows from "../hooks/usePopularTvShows";
import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import GuestMainContainer from "./GuestMainContainer";
import GuestSecondaryContainer from "./GuestSecondaryContainer";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import useOnTheAir from "../hooks/useOnTheAir";
const GuestBrowse = () => {
  usePopularTvShows();
  useTopRatedTvShows();
  useOnTheAir();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 md:px-8 py-3 bg-gradient-to-b from-black/90 to-transparent flex justify-between items-center sticky top-0 z-10">
        {/* Logo */}
        <img
          className="w-24 sm:w-32 md:w-40"
          src={HeaderLogo}
          alt="Netflix Logo"
        />

        {/* User Info */}
        <div className="flex items-center gap-2 sm:gap-4 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
          <img
            className="w-10 h-10  border-2 border-white shadow-md"
            src={netflixAvatar}
            alt="user-icon"
            title="User Avatar"
          />
          <p className="hidden sm:block text-sm sm:text-base font-medium truncate max-w-[120px]">
            Guest User
          </p>
          <button
            onClick={handleLogin}
            className=" py-2 cursor-pointer px-5 bg-red-500 text-white font-bold rounded-md"
          >
            Login
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="-mt-2">
        <section className="animate-fadeIn ">
          <GuestMainContainer />
        </section>
        <section className="animate-fadeIn ">
          <GuestSecondaryContainer />
        </section>
      </main>
    </div>
  );
};

export default GuestBrowse;
