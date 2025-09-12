import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout/MainLayout";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Login,
      },
    ],
  },
]);

export default router;
