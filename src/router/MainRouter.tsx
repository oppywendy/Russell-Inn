import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../page/Homescreen";
import Layout from "../block/Layout";

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
