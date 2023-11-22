import React, {FC} from 'react';
import {ICar} from "../../interfaces";
interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car}) => {
    const {id, brand, year, price} = car;
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>

        </div>
    );
};

export {Car};