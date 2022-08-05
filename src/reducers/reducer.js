const initialState = {
    name: '',
    email: '',
    password:''
}

export const reducer = (state=initialState, action) => {
    const {type, payload} = action
    switch(type){
        case "SET_USER":
            return {...state, 
                name: payload.formName,
                email: payload.formEmail,
                password: payload.formPass
            }
        default:
            return state
    }
}