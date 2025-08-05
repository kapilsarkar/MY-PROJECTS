/* eslint-disable react-hooks/exhaustive-deps */
import HeaderLogo from "../images/mainLogo.png";
import netflixAvatar from "../images/netflix-avatar.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, mobileNumber, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            mobileNumber: mobileNumber,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <div className="absolute w-full px-7 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-28 sm:w-36 md:w-44 mx-auto md:mx-0"
        src={HeaderLogo}
        alt="logo"
      />

      {user && (
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-2 rounded-lg bg-black bg-opacity-30 backdrop-blur-sm">
          <img
            className="w-10 h-10  border-2 border-white"
            src={netflixAvatar}
            alt="user-icon"
            title={user?.email || "User Avatar"}
          />
          <div className="flex flex-col items-start text-white font-medium text-sm sm:text-base leading-snug">
            <p className="truncate max-w-[140px]" title={user?.displayName}>
              {user?.displayName}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="text-red-600 hover:text-white text-sm sm:text-base font-bold transition duration-200 hover:underline"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
