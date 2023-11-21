import {LoginForm} from "../components";
import {useAppDispatch} from "../hooks";
import {useEffect} from "react";
import {authActions} from "../redux";

const LoginPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authActions.setMe())
    }, [dispatch]);

    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};