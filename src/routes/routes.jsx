import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      {
        path: "main",
        element: <Main />,
      },
    ],
  },
]);
export default appRouter;
