import { useEffect } from "react";
import { connect } from "react-redux";
import {getUsers, setCurrentPage, followSuccess, unfollowSuccess, follow, unfollow} from "../../redux/users-reducer";
const { default: Users } = require("./Users");

const UsersContainer = (props) => {

    useEffect ( () => {
        props.getUsers (props.currentPage, props.pageSize)
    }, [] );

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage (pageNumber);
        props.getUsers (props.currentPage, props.pageSize);
    }

    return (
        <Users { ...props } onPageChanged = {onPageChanged} />
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
    }
}

export default connect (mapStateToProps, {
    getUsers, 
    setCurrentPage,
    followSuccess,
    unfollowSuccess,
    follow,
    unfollow,
} )(UsersContainer);