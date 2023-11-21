import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks";

const Header = () => {

    const {me} = useAppSelector(state => state.auth);
    return (
        <div className={css.Header}>
            {me ? <div>{me.username}</div>

                : <div>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Register</NavLink></div>
            }
        </div>
    );
};

export {Header};