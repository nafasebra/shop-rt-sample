import { useAppSelector } from "../../../service/store";
import Products from "../../../assets/product.json";
import { ProductDataType } from "../Homepage/type";

const productsMap: Record<string, ProductDataType> = Products.reduce((map, product) => {
  map[product.id] = product;
  return map;
}, {} as Record<string, ProductDataType>);

function CHeckout() {
  const state = useAppSelector((state) => state.cart);
  const price = state.carts.length
    ? state.carts.reduce((prev, curr) => {
        const product = productsMap[curr.id];
        return product ? prev + (product.price * curr.count) : prev;
      }, 0)
    : 0;

  return (
    <div className="space-y-6 w-full lg:w-[40%] rounded-lg border border-gray-300 p-6">
      <p className="font-bold text-xl">Checkout</p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p>price</p>
          <p className="font-bold text-xl">${price}</p>
        </div>
        <button
          type="button"
          className="py-3 px-6 text-white bg-slate-800 rounded-lg text-lg font-bold"
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default CHeckout;
