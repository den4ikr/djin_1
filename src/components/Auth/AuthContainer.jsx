import { useEffect } from "react";
import { connect } from "react-redux"
import {getAuthUserData, logout} from "../../redux/auth-reducer";
const { default: Auth } = require("./Auth")

const AuthContainer = (props) => {

    useEffect ( () => {
        props.getAuthUserData ();
    }, [] )

    return (
        <Auth { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect (mapStateToProps, {getAuthUserData, logout} )(AuthContainer);