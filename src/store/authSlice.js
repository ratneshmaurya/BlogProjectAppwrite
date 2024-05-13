
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    status : false,
    userData: null
};

//must use the key name as name, initialState, reducers, else we get errors
// Creating a slice requires a string name to identify the slice, an initial state value, and 
// one or more reducer functions to define how the state can be updated.

const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            //when login then status might be true and userData must be given by dispatch function and stored
            state.status= true;
            state.userData=action.payload.userData;
        },
        logout:(state,action)=>{
            state.status= false;
            state.userData=null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;