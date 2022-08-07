import {configureStore} from '@reduxjs/toolkit'
import {loginFormReducer} from './reducers/formReducer'
import {homepageReducer} from './reducers/homepageReducer'

// combineReducer({multiple reducers})
const store = configureStore({reducer: {
    loginForm: loginFormReducer,
    homepage: homepageReducer
}})

export default store // {getState(), dispatch(action), subscribe(listener)}

