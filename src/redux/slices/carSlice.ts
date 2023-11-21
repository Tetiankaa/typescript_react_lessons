import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";
import {carService} from "../../services";

interface IState {
    cars:ICar[],
    isLoading:boolean,
    errors:string,
    trigger:boolean
}
const initialState:IState={
    cars:[],
    isLoading:null,
    errors:null,
    trigger:null
}

const getAll = createAsyncThunk<ICar[],void>(
    'carSlice/getAll',
            async (_,{rejectWithValue}) =>{
        try {
            const {data:{items}} = await carService.getAll();
            return items;
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
}
)

const create = createAsyncThunk<void,{car:ICar}>(
    'carSlice/create',
            async ({car},{rejectWithValue})=>{
        try {
            await carService.create(car)
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response.data)
        }
}
)
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:builder=>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.cars = action.payload;
            })
            .addCase(create.fulfilled, state => {
                state.trigger = !state.trigger;
            })
            .addMatcher(isFulfilled(getAll,create), state => {
                state.isLoading = false;
                state.errors = null;
            })
            .addMatcher(isPending(getAll,create),state => {
                state.isLoading = true;
            })
            .addMatcher(isRejected(getAll,create), (state, action) => {
                state.errors = action.payload as string;
                state.isLoading = false;
            })
    }
);

const {reducer:carReducer, actions} = carSlice;

const carActions = {...actions, getAll, create};

export {
    carSlice,
    carActions,
    carReducer
}