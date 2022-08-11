import { setUserPreloaded } from "../actions/loginActions"

export const loginMiddleware = (store) => {
    // scope
    return (next) => {
        // scope
        return async (action)=> {
            const { dispatch } = store
            const { type } = action
            switch(type){
                case "FETCH_USER":
                    const user = await fetch('https://jsonplaceholder.typicode.com/users/8');
                    const parsedUser = await user.json();
                    const userInfo = {name: parsedUser.name, email: parsedUser.email,  password: ''}
                    dispatch(setUserPreloaded(userInfo))
                    break;
                default:
                    next(action)
            }
        }
    }
}

