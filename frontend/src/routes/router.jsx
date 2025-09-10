import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     index: true,
    //     Component: <></>,
    //   },
    // ],
  },
]);

export default router;
