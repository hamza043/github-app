import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
