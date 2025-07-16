import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  //const dispatch = useDispatch();

  // 1. Access items from Redux state
  const cartItems = useSelector((state)=>state.cart.items);

   // 2. Calculate total count and total price
  //  const totalCount = cartItems.length;

  //  const totalPrice = cartItems.reduce((acc,item)=> acc + item.price,0);



  return (
    <div className=" w-full mt-20 flex flex-wrap justify-center">
      <div className="grid gap-2 p-3 ">
          {cartItems.map((item,index)=>(
            <div key={index} className="flex items-center gap-4 p-4 bg-amber-100 shadow-md rounded-md">
                <img src={item.image}/>
                <p>{item.price}</p>
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default Cart;
