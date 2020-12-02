import s from "./Menu.module.scss";
const { NavLink } = require("react-router-dom")

const Menu = (props) => {
    return (
        <div>
            <div className = {s.menu__row} >
                <div>
                    <NavLink className = {s.link} to = "/profile" >Profile</NavLink>
                </div>
                <div>
                    <NavLink className = {s.link} to = "/users" >Users</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu;