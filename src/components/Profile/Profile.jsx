import { Redirect } from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    
    if (props.authorisedUserId === null) {
        return <Redirect to = "/login" />
    } 

    return (
        <div>
            <ProfileInfo { ...props } />
        </div>
    )
}

export default Profile;