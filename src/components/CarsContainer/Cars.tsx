import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {carActions} from "../../redux";

const Cars = () => {

    const {cars,isLoading,trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch,trigger]);
    return (
        <div>
            {isLoading && <h1>loading.....</h1>}
            {cars.map(car=><Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};