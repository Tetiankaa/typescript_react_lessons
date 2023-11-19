import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Car} from "./Car";
import {carActions} from "../redux";

const Cars = () => {

  const {cars,trigger} = useAppSelector(state => state.cars);
  const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch,trigger]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};