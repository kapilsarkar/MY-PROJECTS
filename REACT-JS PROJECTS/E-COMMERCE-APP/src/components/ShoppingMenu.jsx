import { MaleCloth } from "../Images/Image";
import { FemaleCloth } from "../Images/Image";
import { Shoes } from "../Images/Image";
const ShoppingMenu = () => {
  return (
    <div className="w-full  mt-10 dark:bg-gray-900 dark:text-white text-black bg-white p-2">
      <div className=" mt-5 p-2 flex flex-wrap justify-center">
        <div className="relative w-96 p-2">
          <img
            className="w-full rounded-2xl"
            src={MaleCloth}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
              MEN'S
            </h3>
          </div>
        </div>
         <div className="relative w-96 p-2">
          <img
            className="w-full rounded-2xl"
            src={FemaleCloth}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
              WOMEN'S
            </h3>
          </div>
        </div>
      </div>
      <div className=" mt-5 p-2 flex flex-wrap justify-center">
        <div className="relative w-96 p-2">
          <img
            className="w-full rounded-2xl"
            src={Shoes}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
              SHOE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingMenu;
