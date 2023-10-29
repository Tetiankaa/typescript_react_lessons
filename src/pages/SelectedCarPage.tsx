import React from 'react';
import {ICar} from "../interfaces/carInterface";
import {useAppLocation} from "../hooks/useAppLocation";
import {SelectedCar} from "../components/CarContainer/SelectedCar";


const SelectedCarPage = () => {

    const {state:{car}} = useAppLocation<{car:ICar}>();

    return (
        <div>
            {car && <SelectedCar car={car}/>}
        </div>
    );
};

export {SelectedCarPage};