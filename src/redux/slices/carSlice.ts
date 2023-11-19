import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";


interface IState {
    cars: ICar[],
    trigger: boolean,
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    trigger: null,
    carForUpdate: null
}
const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data;

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
)

const update = createAsyncThunk<void, {id:number ,car: ICar }>(
    'carSlice/update',
    async ({id,car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
    }
)

const deleteById = createAsyncThunk<void, {id:number}>(
        'carSlice/deleteById',
                async ({id},{rejectWithValue})=>{
                try {
                    await carService.deleteById(id);
                }catch (e) {
                    const error = e as AxiosError;
                    return rejectWithValue(error.response.data);
                }
        }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(create,update,deleteById), state => {
                state.trigger = !state.trigger;
            })


});

const {reducer: carReducer, actions} = carSlice;

const carActions = {...actions, getAll, create, update,deleteById};

export {carSlice, carActions, carReducer}