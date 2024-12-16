import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

export default function Main(){
    const routes = createBrowserRouter([
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        },
    ]);

    return(
        <RouterProvider router={routes}/>
    )
      
}