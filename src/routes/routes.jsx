import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Dashboard from "./Dashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
export default appRouter;
