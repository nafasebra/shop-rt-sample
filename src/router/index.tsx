import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../App"; // Ensure correct path to App component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        lazy: async () => ({
          Component: (await import("../pages/homepage")).default,
        }),
      },
      {
        path: "/cart",
        lazy: async () => ({
          Component: (await import("../pages/shoppingCart")).default,
        }),
      },
    ],
  },
], {
  basename: "/",
});

export default router;
