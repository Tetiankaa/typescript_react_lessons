import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";
import {RequiredAuth} from "./hoc";

const router  = createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'login'}/>},
            {path:'login',element:<LoginPage/>},
            {path:'register',element:<RegisterPage/>},
            {path:'cars',element: <RequiredAuth><CarPage/></RequiredAuth>}

        ]}
])

export {router}
