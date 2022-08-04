import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: ''
}

const homePageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        setUsername(state, action){
            const {payload} = action
            state.username = payload
        }
    }
})

export const {setUsername} = homePageSlice.actions
export default homePageSlice.reducer