import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);

  const totalCount = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full mt-20 flex flex-wrap justify-center items-center">
      <div className="grid gap-2 p-3">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id || item.title}
              className="flex items-center gap-4 p-4 bg-red-500 shadowlg text-white rounded-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="p-2 mt-5">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">₹{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-xl bg-blue-600 p-2 text-white rounded-lg font-semibold mb-4">
        <p className=" font-bold p-2">Cart: {totalCount} item(s)</p>
        <p className=" font-bold p-2">Total: ₹{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
