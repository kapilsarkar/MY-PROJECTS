/* eslint-disable no-unused-vars */
import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44  mx-auto md:mx-0" src={HeaderLogo} alt="logo" />
      <div className=" flex p-2">
        <img className="w-12 h-12 " alt="user-icon" src={netflixAvatar} />
        <button onClick={handleSignOut} className=" font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
