import { createBrowserRouter  } from "react-router-dom";
import App from "../App.tsx"; // Adjust the import path as necessary
import Home from "../Pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home/>

      }
    ]
  }
])

export default router;
