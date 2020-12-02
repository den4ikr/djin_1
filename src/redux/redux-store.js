import thunkMiddelware from "redux-thunk";
import appReducer from "./app-reducer";
import AuthReducer from "./auth-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers ( {
    auth: AuthReducer,
    users: UsersReducer,
    profilePage: ProfileReducer,
    app: appReducer,
} )

let store = createStore (reducers, applyMiddleware (thunkMiddelware));

export default store;