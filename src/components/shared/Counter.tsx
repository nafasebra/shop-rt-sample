import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useAppDispatch, useAppSelector } from "../../service/store";
import {
  decrementProduct,
  incrementProduct,
  removeCart,
  selectCartCountById,
} from "../../service/feature/Cart/CartSlice";

interface CounterProps {
  id: string;
}

function Counter({ id }: CounterProps) {
  const dispatch = useAppDispatch();
  const productCount = useAppSelector((state) =>
    selectCartCountById(state, id)
  );

  const handleCounter = (type: "inc" | "dec" | "del") => () => {
    switch (type) {
      case "inc":
        dispatch(incrementProduct(id));
        break;
      case "dec":
        dispatch(decrementProduct(id));
        break;
      case "del":
        dispatch(removeCart(id));
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex items-center gap-3">
      {productCount === 1 ? (
        <button
          className="flex items-center justify-center w-8 h-8 rounded-lg text-red-600 font-bold"
          onClick={handleCounter("del")}
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      ) : (
        <button
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white font-bold"
          onClick={handleCounter("dec")}
        >
          <MinusIcon className="h-6 w-6" />
        </button>
      )}
      <p className="w-8 text-center font-bold">{productCount}</p>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white font-bold"
        onClick={handleCounter("inc")}
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Counter;
