import { Outlet } from "react-router-dom";
import ShoppingMenu from "./ShoppingMenu";

const Body = ()=>{
    return(
        <div className="w-full dark:bg-gray-900 dark:text-white text-black bg-white">
        <Outlet/>
        <ShoppingMenu/>
        </div>
    )
}

export default Body;