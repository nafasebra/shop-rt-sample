import { 
  // createBrowserRouter, 
  createHashRouter 
} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("../Pages/Homepage")).default,
      }),
    },
    {
      path: "/product",
      lazy: async () => ({
        Component: (await import("../Pages/Product")).default,
      }),
    },
    {
      path: "/cart",
      lazy: async () => ({
        Component: (await import("../Pages/ShoppingCart")).default,
      }),
    },
  ],
  {
    basename: "/",
  }
);

export default router;
