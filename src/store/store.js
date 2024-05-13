import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

//configure store must take an object containing the reducer object that takes 
//each slices in <string name to identify the slice>:<reducer export name> formats

const store = configureStore({
    reducer: {
        auth : authSlice,
    }
});


export default store;