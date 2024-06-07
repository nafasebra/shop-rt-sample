import { useCallback, useEffect, useState } from "react";
import Counter from "./Counter";
import { useAppDispatch, useAppSelector } from "../../service/store";
import { addToCart, removeCart } from "../../service/feature/Cart/CartSlice";

interface AddButtonProps {
  id: string;
  title: string;
}

function AddButton({ id, title }: AddButtonProps) {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);

  useEffect(() => {
    const productInCart = state.carts.find((item) => item.id === id);
    setIsInCart(!!productInCart);
  }, [state, id]);

  const handleToggle = useCallback(() => {
    setIsInCart((prevState) => {
      const newIsInCart = !prevState;
      if (newIsInCart) dispatch(addToCart({ id: id, title: title, count: 1 }));
      else dispatch(removeCart(id));
      return newIsInCart;
    });
  }, [dispatch, id, title]);

  return (
    <>
      {isInCart ? (
        <Counter id={id} />
      ) : (
        <button
          className={`transition-all border border-slate-800 bg-slate-800 rounded-lg text-white py-2 px-3`}
          onClick={handleToggle}
        >
          Add
        </button>
      )}
    </>
  );
}

export default AddButton;
