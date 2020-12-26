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
                { u.followed 
                    ? <button onClick = { () => { props.unfollow (u.id) } } >Unfollow</button>
                    : <button onClick = { () => { props.follow (u.id) } } >Follow</button>
                }
            </div>
        </div>
    )
}

export default User;

// https://den4ikr.github.io/roman_page_23/
// https://den4ikr.github.io/roman_page_20/
// https://den4ikr.github.io/roman_page_18/ 