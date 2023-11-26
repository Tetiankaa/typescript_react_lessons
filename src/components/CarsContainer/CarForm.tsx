import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register,handleSubmit} = useForm<ICar>();
    const dispatch = useAppDispatch();
    const {errors} = useAppSelector(state => state.cars)

    const create:SubmitHandler<ICar> = async (car)=>{
       await dispatch(carActions.create({car}))
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>create</button>
            {errors && <div>{errors}</div>}
        </form>
    );
};

export {CarForm};