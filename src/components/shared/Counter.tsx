import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";

function Counter() {
  const [counter, setCounter] = useState(1);

  const handleCounter = (type: "inc" | "dec" | "del") => () => {
    switch (type) {
      case "inc":
        setCounter((prev) => {
          return prev + 1;
        });
        break;
      case "dec":
        setCounter((prev) => {
          return prev - 1;
        });
        break;
      case "del":
        console.log("delete");
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex items-center gap-3">
      {counter === 1 ? (
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
      <p className="w-24 text-center font-bold">{counter}</p>
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
