import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <div className="absolute w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44 mx-auto md:mx-0" src={HeaderLogo} alt="logo" />

      {user && (
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-2">
          <img
            className="w-12 h-12  cursor-pointer"
            src={netflixAvatar}
            alt="user-icon"
            title={user?.email || "User Avatar"}
          />
          <p className="text-white font-semibold text-lg">{user?.displayName}</p>
          <p className="text-white font-semibold text-lg">{user?.mobileNumber}</p>
          <button
            onClick={handleSignOut}
            className="text-white font-bold hover:underline hover:text-red-400 transition"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;