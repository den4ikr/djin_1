import userAvatar from "../../../assets/images/user.png";
import s from "./User.module.scss";

const User = (props) => {
    const u = props.user;
    return (
        <div className = {s.user__block} >
            <div>
                <img src = {u.photos.small != null ? u.photos.small: userAvatar } alt = {"userAvatar"} className = {s.avatar} />    
            </div>
            <div>
                {u.name}
            </div>
            <div>
            </div>
        </div>
    )
}

export default User;