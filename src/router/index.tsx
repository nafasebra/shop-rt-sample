import { 
  // createBrowserRouter, 
  createHashRouter 
} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("../pages/homepage")).default,
      }),
    },
    {
      path: "/product",
      lazy: async () => ({
        Component: (await import("../pages/product")).default,
      }),
    },
    {
      path: "/cart",
      lazy: async () => ({
        Component: (await import("../pages/shoppingCart")).default,
      }),
    },
  ],
  {
    basename: "/",
  }
);

export default router;
