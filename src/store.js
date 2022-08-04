import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/loginForm/loginFormSlice'


export const store = configureStore({reducer:{
    logInState: loginReducer
}})