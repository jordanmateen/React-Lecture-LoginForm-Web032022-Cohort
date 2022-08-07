const homepageState = {
    username: ""
}

export const homepageReducer = (state = homepageState, action) => {

    switch(action.type){
        case 'UPDATE_USER_NAME':
          return {...state, username: action.payload}
        default:
         return state;
    }
}