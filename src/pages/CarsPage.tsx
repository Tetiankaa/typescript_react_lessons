import React, {useState} from 'react';
import {Cars} from "../components/CarContainer/Cars";
import {Outlet} from "react-router-dom";
import {CarForm} from "../components/CarContainer/CarForm";
import {ICar} from "../interfaces/carInterface";

const CarsPage = () => {
    const [flag, setFlag] = useState<boolean>(null);

    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    return (
        <div>
            <CarForm setFlag={setFlag} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} setFlag={setFlag}/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};