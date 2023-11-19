import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux";

const CarForm = () => {
    const {register,reset, handleSubmit, setValue} = useForm();
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    }, [carForUpdate,setValue]);

    const save:SubmitHandler<ICar>= async (car)=>{
        await dispatch(carActions.create({car}));
        reset();
    }

    const update:SubmitHandler<ICar>= async (car)=>{
        await dispatch(carActions.update({id:carForUpdate.id, car}));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};