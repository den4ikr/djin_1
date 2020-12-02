import { authAPI, secirityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const SET_ERROR = "SET_ERROR";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    error: "",
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return { ...state, ...action.data }
        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl }
        case SET_ERROR:
            return { ...state, error: action.error }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ( { type: SET_AUTH_USER_DATA, data: { userId, email, login, isAuth } } );

export const setCaptchaUrl = (captchaUrl) => ( { type: SET_CAPTCHA_URL, captchaUrl } );

export const setError = (error) => ( { type: SET_ERROR, error } );

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me ();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch ( setAuthUserData (id, email, login, true) );
    }
}

export const login = (email, password, captcha) => async (dispatch) => {
    let response = await authAPI.login (email, password, captcha);
    if (response.data.resultCode === 0) {
        dispatch (getAuthUserData ())
    } else if (response.data.resultCode === 10) {
        dispatch (getCaptchaUrl ());   
    } else if (response.data.resultCode === 1) {
        dispatch (setError (response.data.messages[0]))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout ();
    if (response.data.resultCode === 0) {   
        dispatch (setAuthUserData (null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    debugger
    const response = await secirityAPI.getCaptchaUrl ();
    dispatch (setCaptchaUrl (response.data.url));
}

export default AuthReducer;