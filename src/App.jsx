import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { mainLoader } from "./pages/Main";
const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <Error />, loader: mainLoader },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
