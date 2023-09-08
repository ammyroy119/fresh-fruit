import './App.css';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter as Routes,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
