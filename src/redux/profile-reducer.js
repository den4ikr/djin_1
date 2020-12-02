import { profileAPI } from "../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_ERROR = "SET_ERROR";

let initialState = {
    profile: null,
    status: "",
    error: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_USER_STATUS:
            return { ...state, status: action.status };
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos }};
        case SET_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ( { type: SET_USER_PROFILE, profile } );

export const setUserStatus = (status) => ( { type: SET_USER_STATUS, status } );

export const savePhotoSuccess = (photos) => ( { type: SAVE_PHOTO_SUCCESS, photos } );

export const setError = (error) => ( { type: SET_ERROR, error } );


export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile (userId);
    dispatch (setUserProfile (response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus (userId);
    dispatch (setUserStatus (response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus (status);
    dispatch (setUserStatus (status))
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto (file);
    dispatch (savePhotoSuccess (response.data.data.photos));
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState ().auth.userId;
    const response = await profileAPI.saveProfile (profile);
    if (response.data.resultCode === 0) {
        dispatch (getUserProfile (userId));
    } else {
        dispatch (setError (response.data.messages [0]));
    }
}

export default ProfileReducer;