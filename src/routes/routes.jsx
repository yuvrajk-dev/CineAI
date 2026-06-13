import { createBrowserRouter } from "react-router";
import Home from "./Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {},
]);
export default appRouter;
