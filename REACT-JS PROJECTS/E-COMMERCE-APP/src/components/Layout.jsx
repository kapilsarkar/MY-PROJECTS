import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white text-black bg-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
