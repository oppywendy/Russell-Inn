import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import Homescreen from "../page/Homescreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
