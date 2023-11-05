import {createBrowserRouter} from "react-router-dom";
import {Component} from "./components/Component";

const router = createBrowserRouter([
    {path:"/:id", element:<Component/>}
])

export {router}