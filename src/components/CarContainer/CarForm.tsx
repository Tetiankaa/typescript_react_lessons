import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/ISetState";


interface IProps{
    setFlag:ISetState<boolean>,
    carForUpdate:ICar,
    setCarForUpdate:ISetState<ICar>
}
const CarForm:FC<IProps> = ({setFlag,carForUpdate,setCarForUpdate}) => {
    const {reset, register, handleSubmit, setValue, formState:{errors,isValid}}
        = useForm<ICar>({mode:"onBlur", resolver:joiResolver(carValidator)})

    const save:SubmitHandler<ICar> =async (car) =>{
        if (carForUpdate){
            await carService.updateById(carForUpdate.id,car);
            setCarForUpdate(null);
        }else {
            await carService.create(car);
        }

        setFlag(prev=>!prev);
        reset();
    };

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand,{shouldValidate:true})
            setValue('price',carForUpdate.price,{shouldValidate:true})
            setValue('year',carForUpdate.year,{shouldValidate:true})
        }
    }, [carForUpdate]);

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button type={"submit"} disabled={!isValid}>Save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};