import { useAppSelector } from "../../../service/store";
import Counter from "../../shared/Counter";
import { Link } from "react-router-dom";
import Products from "../../../assets/product.json";

function CartContainer() {
  const state = useAppSelector((state) => state.cart);

  const displayPrice = (id: string) => {
    const selectedProduct = Products.find((item) => item.id === id);
    return selectedProduct?.price || 0;
  };

  const displayTotalPrice = (id: string) => {
    const selectedProduct = Products.find((item) => item.id === id);
    const totalPrice = state.carts.reduce((_, curr) => {
      return (selectedProduct?.price || 0) * curr.count;
    }, 0);
    return totalPrice;
  };

  return (
    <div className="space-y-6 w-full lg:w-[70%] rounded-lg border border-gray-300 p-6">
      <p className="font-bold text-xl">Shopping cart</p>

      <div className="space-y-3">
        {state.carts.length ? (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.carts.map((item) => (
                  <tr key={item.id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4 font-bold">${displayPrice(item.id)}</td>
                    <td className="px-6 py-4 font-bold">${displayTotalPrice(item.id)}</td>
                    <td className="px-6 py-4">
                      <Counter id={item.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
