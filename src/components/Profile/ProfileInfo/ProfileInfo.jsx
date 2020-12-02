import Preloader from '../../Preloader/Preloader';
import userAvatar from "../../../assets/images/user.png";
import Status from './Status/Status';
import s from "./ProfileInfo.module.scss";
import { useState } from 'react';
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = (props) => {

    const [ editMode, setEditMode ] = useState (false);
    const [ showMode, setShowMode ] = useState (false);

    const showShowMode = () => {
        setShowMode (true);
    }

    const hideShowMode = () => {
        setShowMode (false);
    }

    const goToEditMode = () => {
        setEditMode (true);
    }

    const goOutOfEditMode = () => {
        setEditMode (false);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto (e.target.files[0]);
        }
    }
    
    const onSubmit = (values) => {
        goOutOfEditMode ();
        props.saveProfile (values);
    }

    return (
        <div>
            { !props.profile ? <Preloader /> : <div>
                <div className = {s.info__row} >
                    <div className = {s.avatar__block} >
                        <div>
                            <img className = {s.profile__img} alt = "Avatar" src = {props.profile.photos.large ? props.profile.photos.large : userAvatar } /> 
                        </div>
                        <div className = {s.photo__input} >
                            <input type = {"file"} onChange = {onMainPhotoSelected} />
                        </div>
                        <div className = {s.name} >
                            Name: {props.profile.fullName}
                        </div>
                    </div>
                    <div>
                        <div className = {s.info} >
                            <div className = {s.status} >
                                <Status { ...props } />
                            </div>
                            { showMode &&  
                                <div>
                                    <div>
                                        { editMode ? <ProfileDataForm onSubmit = {onSubmit} saveProfile = {props.saveProfile} profile = {props.profile} goOutOfEditMode = {goOutOfEditMode} /> : <ProfileData error = {props.error} profile = {props.profile} /> }
                                    </div>
                                    <div>
                                        { !editMode && <button className = {s.edit__btn} onClick = {goToEditMode} >EDIT</button> }
                                    </div>
                                </div>
                            }
                            { !showMode 
                                ? <button className = {s.show__btn} onClick = {showShowMode} >Show more</button> 
                                : <button className = {s.show__btn} onClick = {hideShowMode} >Hide</button> }
                        </div>
                   </div>
                </div>
            </div> }
        </div>
    )
}


export default ProfileInfo