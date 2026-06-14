import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Auth from "../pages/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
    ],
  },
  {},
]);
export default appRouter;
