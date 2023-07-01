import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import AuthBar from "../components/navbar/AuthBar";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import AuthRoute from "./AuthRoute";
import NavBar from "../components/navbar/NavBar";

const router = createBrowserRouter([
  {
    element: <AuthBar />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <AuthRoute Page={<HomePage />} />,
      },
    ],
  },
]);

export default router;
