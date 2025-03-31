import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../page/Homescreen";
import Layout from "../block/Layout";
import Photos from "../component/Photos";
import Facilities from "../component/Facilities";
import Room from "../component/Room";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },

      {
        path: "/gallery",
        element: <Photos />,
      },

      {
        path: "/facilities",
        element: <Facilities />,
      },

      {
        path: "/rooms",
        element: <Room />,
      },
    ],
  },
]);
