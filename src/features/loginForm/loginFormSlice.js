import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: ''
}

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        setUserInfo(state, action){
            const { payload } = action
            state.name = payload.formName
            state.email = payload.formEmail
            state.password = payload.formPass
        }
    }
});

export const {setUserInfo} = loginFormSlice.actions;
export default loginFormSlice.reducer