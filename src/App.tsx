import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Loading from "./components/shared/Loading";
import { Provider } from "react-redux";
import store from "./service/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="min-h-screen bg-white container py-8">
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
