import {configureStore} from '@reduxjs/toolkit'
import {loginFormReducer} from './reducers/formReducer'
import {homepageReducer} from './reducers/homepageReducer'
import { loginMiddleware } from './middleware/loginMiddleware'

// combineReducer({multiple reducers})
const store = configureStore({reducer: {
    loginForm: loginFormReducer,
    homepage: homepageReducer
    },
    middleware: [loginMiddleware]
})

export default store // {getState(), dispatch(action), subscribe(listener)}
