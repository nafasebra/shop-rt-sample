import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../../../service/feature/Cart/CartSlice";
import { useAppDispatch } from "../../../service/store";
import { useState } from "react";

function ProductCard() {
  const [temp, setTemp] = useState(false);
  const dispach = useAppDispatch();

  const ToggleButton = () => {
    setTemp(!temp);
    if (temp) {
      dispach(removeCart("123"));
    } else {
      dispach(
        addToCart({
          id: "123",
          title: "abc",
          count: 1,
        })
      );
    }
  };

  return (
    <article className="border border-gray-300 rounded-lg p-4 flex flex-col items-center gap-4">
      <Link to={"/product?id=12"}>
        <img src="/images/1.webp" className="h-[250px]" />
      </Link>
      <div className="w-full flex flex-col">
        <h2 className="font-bold text-lg">Clothed</h2>
        <div className="flex items-center justify-between gap-3">
          <p>$12</p>
          <button
            className={`transition-all border ${
              temp
                ? "border-red-500 bg-red-500"
                : "border-slate-800 bg-slate-800"
            } rounded-lg text-white py-2 px-3`}
            onClick={ToggleButton}
          >
            {temp ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
