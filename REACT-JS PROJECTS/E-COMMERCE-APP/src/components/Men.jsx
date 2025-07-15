import { useEffect, useState } from "react";
import { MENS_CLOTHING } from "../utils/constant";
const Men = () => {
  const [showMen, setShowMen] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENS_CLOTHING);
      const json = await data.json();
      console.log(json);
      setShowMen(json);
    } catch (err) {
      console.error("Failed to fetch men's Cloth:", err);
    }
  };

  return (
    <div className="w-full  mt-10 dark:bg-gray-900 dark:text-white text-black bg-white p-2">
      <h2 className=" text-center bg-red-500 text-white text-2xl shadow-lg mt-5 p-3 font-bold">Men's</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {showMen.map((m) => {
          return (
            <div
              key={m?.id}
              className="w-60 mt-5 p-3 shadow-lg rounded bg-white dark:bg-gray-900"
            >
              <div className="p-3 mt-10 shadow-2xl">
                <img
                  src={m?.image}
                  alt={m?.title}
                  className="w-full h-64  object-cover rounded"
                />
                
                <p className="font-semibold">{m.title.length > 20 ? m.title.slice(0, 20) + "..." : m.title}</p>
                <p className=" mt-2 font-bold">₹ {m.price}</p>
                <button className="mt-2 py-2 px-2 bg-red-500 text-white font-semibold rounded-md">Add To cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Men;
