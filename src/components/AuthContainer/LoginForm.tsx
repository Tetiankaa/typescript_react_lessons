import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const LoginForm = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const {errors} = useAppSelector(state => state.auth);
    const loginUser:SubmitHandler<IAuth>= async (user)=>{
             const {meta:{requestStatus}} =await dispatch(authActions.login({user}))
            if (requestStatus === 'fulfilled'){
                navigate('/cars');
            }
    }

    return (
        <form onSubmit={handleSubmit(loginUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
            {errors && <h1>User doesn't exist. Try over again.</h1>}
        </form>
    );
};

export {LoginForm};