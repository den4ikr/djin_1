import { usersApi } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [],
    totalUsersCount: 1,
    pageSize: 10,
    currentPage: 1,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    }
}

export const setUsers = (users) => ( { type: SET_USERS, users } );

export const setTotalUsersCount = (totalUsersCount) => ( { type: SET_TOTAL_USERS_COUNT, totalUsersCount } );

export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );

export const followSuccess = (userId) => ( { type: FOLLOW, userId } );

export const unfollowSuccess = (userId) => ( { type: UNFOLLOW, userId } );

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    const response = await usersApi.getUsers (currentPage, pageSize)
        dispatch (setUsers (response.data.items));
        dispatch (setTotalUsersCount (response.data.totalCount));
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    const response = await apiMethod (userId);
    if (response.data.resultCode === 0) {
        dispatch (actionCreator (userId));
    }
}

export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersApi.follow.bind (usersApi);
    let actionCreator = followSuccess;
    followUnfollowFlow (dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersApi.unfollow.bind (usersApi);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow (dispatch, userId, apiMethod, actionCreator)
}

export default UsersReducer;