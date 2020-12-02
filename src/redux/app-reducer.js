import { getAuthUserData } from "./auth-reducer";

const SET_INITILISED = "SET_INITILISED";

let initialState = {
    initilised: false,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITILISED:
            return { ...state, initilised: true};
        default:
            return state;
    }
}

export const setInitiliSuccess = (initilised) => ( { type: SET_INITILISED, initilised } );

export const initiliseApp = () => (dispatch) => {
    const promise = dispatch (getAuthUserData ());
    Promise.all ([promise]).then ( () => {
        dispatch (setInitiliSuccess ());
    } )
}

export default AppReducer;