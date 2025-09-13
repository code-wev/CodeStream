import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Test from "../pages/test/test";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/signUp",
        Component: Register,
      },
      {
        path: "/test",
        Component: Test,
      },
    ],
  },
]);

export default router;
