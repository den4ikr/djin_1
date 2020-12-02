const { NavLink } = require("react-router-dom")

const Auth = (props) => {

    return (
        <div>
            { props.isAuth ? <div>{props.login} - <button onClick = {props.logout} >Log out</button> </div> : <div><NavLink to = {"/login"} >Login</NavLink></div> }
        </div>
    )
}

export default Auth;