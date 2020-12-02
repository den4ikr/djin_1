import AuthContainer from "../Auth/AuthContainer";
import Menu from "../Menu/Menu";
import s from "./Header.module.scss";

const Header = (props) => {
    return (
        <div className = 'container' >
            <div className = {s.header} >
                <div>
                    <img alt = "logo" className = {s.logo} src = "https://th.bing.com/th/id/OIP.nXHjRyf0sVXUGa36m1gT-gHaHg?pid=Api&rs=1" />
                </div>
                <div>
                    <Menu />
                </div>
                <div className = {s.login__data} >
                    <AuthContainer />
                </div>
            </div>
        </div>
    )
}

export default Header;