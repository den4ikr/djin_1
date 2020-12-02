import s from "./ProfileData.module.scss";

const ProfileData = (props) => {    
    return (
        <div className = {s.main__info} >
            <div>
                Looking for a job: {props.profile.lookingForAJob ? "YES" : "NO"}
            </div>
            <div>
                Description: {props.profile.lookingForAJobDescription}
            </div>
            <div>
                About me: {props.profile.aboutMe}
            </div>
            <div>
                Contacts: { Object.keys (props.profile.contacts).map ( key => {
                    return (
                        <div key = {key} className = {s.contact__item} >
                            <div className = {s.key} >
                                {key}:
                            </div> { props.profile.contacts[key] }
                        </div>
                    )
                } ) }
            </div>
            <div className = {s.error} >
                {props.error && props.error}
            </div>
        </div>
    )
}

export default ProfileData;