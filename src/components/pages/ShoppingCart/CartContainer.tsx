import { useAppSelector } from "../../../service/store";
import Counter from "../../shared/Counter";
import { Link } from "react-router-dom";

function CartContainer() {
  const state = useAppSelector((state) => state.cart);
  
  return (
    <div className="space-y-6 w-full lg:w-[60%] rounded-lg border border-gray-300 p-6">
      <p className="font-bold text-xl">Shopping cart</p>
      <div className="space-y-3">
        {state.carts.length ? (
          state.carts.map((item, index) => (
            <>
              <hr
                className={index === 0 ? "hidden" : "block border-gray-300"}
              />
              <div key={item.id} className="flex items-center justify-between">
                <p className="text-black">{item.title}</p>
                <Counter id={item.id} />
              </div>
            </>
          ))
        ) : (
          <div className="py-12">
            <p className="text-gray-600 text-center">
              The Shopping cart is empty! go to <Link to="/">Homepage</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartContainer;
