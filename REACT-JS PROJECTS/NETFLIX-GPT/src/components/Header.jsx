import HeaderLogo from "../images/mainLogo.png";

const Header = () => {
  return (
    <div className="absolute w-screen px-7 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={HeaderLogo} alt="logo" />
    </div>
  );
};

export default Header;
