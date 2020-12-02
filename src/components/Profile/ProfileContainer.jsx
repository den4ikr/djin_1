import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    useEffect ( () => {
        if (props.authorisedUserId !== null) {
            props.getUserProfile (props.authorisedUserId);
            props.getUserStatus (props.authorisedUserId);
        }
    }, [props.authorisedUserId] );

    useState ( () => {
        props.getUserProfile (props.authorisedUserId); 
        console.log("RENDER");
    }, [props.profile] )

    return (
        <Profile { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authorisedUserId: state.auth.userId,
        status: state.profilePage.status,
        error: state.profilePage.error,
    }
}

export default compose (
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter,
) (ProfileContainer);