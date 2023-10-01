import './App.css';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter as Routes,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = Routes([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
