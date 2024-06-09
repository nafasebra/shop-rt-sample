import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { useAppSelector } from "../../service/store";
import { Link } from "react-router-dom";

function Navbar() {
  const store = useAppSelector((store) => store.cart);

  return (
    <nav className="bg-slate-800 py-4">
      <div className="container flex items-center justify-between text-white">
        <Link to="/">
          <h1 className="font-bold text-xl">Shop</h1>
        </Link>

        <Link to="/cart">
          <div className="relative">
            <ShoppingCartIcon className="w-8 h-8" />
            <div className="absolute -top-1 -right-1 bg-red-600 text-center flex items-center justify-center text-white rounded-full w-5 h-5 text-sm">
              {store.carts.length}
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
