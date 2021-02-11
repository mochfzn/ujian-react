const defaultState = {
    statusLogin: false,
    role: "",
    index: ""
}

const authReducer = (state = defaultState, action) => {
    //console.log("state:", state);
    //console.log("action:", action);

    switch(action.type) {
        case "LOGIN_SUCCESS":
            return {
                statusLogin: true,
            }
        default: 
            return state
    }
}

export default authReducer