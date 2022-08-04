import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/loginForm/loginFormSlice'
import homepageReducer from './features/homepage/homePageSlice'

export const store = configureStore({reducer:{
    logInState: loginReducer,
    homepageState: homepageReducer
}})