export const setUser = (userInfo) => {
    return {
        type: "SET_USER",
        payload: userInfo
    }
}


export const setUserPreloaded = (userInfo) => {
    return {
        type: "SET_USER_PRELOAD",
        payload: userInfo
    }
}

// Middleware Action
export const fetchUserData = () => {
    return {type: "FETCH_USER"}
}