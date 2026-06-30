import { RouterProvider } from "react-router";
import appRouter from "./routes/routes";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
