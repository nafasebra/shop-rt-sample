import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../../../service/feature/Cart/CartSlice";
import { useAppDispatch, useAppSelector } from "../../../service/store";
import { useCallback, useEffect, useState } from "react";
import { ProductProps } from "./type";

function ProductCard({ data }: ProductProps) {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart);

  useEffect(() => {
    const productInCart = state.carts.find((item) => item.id === data.id);
    setIsInCart(!!productInCart);
  }, [state, data.id]);

  const handleToggle = useCallback(() => {
    setIsInCart((prevState) => {
      const newIsInCart = !prevState;
      if (newIsInCart)
        dispatch(addToCart({ id: data.id, title: data.title, count: 1 }));
      else dispatch(removeCart(data.id));
      return newIsInCart;
    });
  }, [dispatch, data.id, data.title]);

  return (
    <article className="border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4">
      <Link to={`/product?id=${data.id}`}>
        <img src={data.imageURL} className="h-[250px]" />
      </Link>
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-lg">{data.title}</h2>
        <div className="flex items-center justify-between gap-3">
          <p>${data.price}</p>
          <button
            className={`transition-all border ${
              isInCart
                ? "border-red-500 bg-red-500"
                : "border-slate-800 bg-slate-800"
            } rounded-lg text-white py-2 px-3`}
            onClick={handleToggle}
          >
            {isInCart ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
