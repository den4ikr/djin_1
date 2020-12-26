import s from "./Users.module.scss";
import User from "./User/User";
import Paginator from "../Paginator/Paginator";

const Users = (props) => {
    debugger
    return (
        <div className = {s.users__block} >
            <Paginator totalUsersCount = {props.totalUsersCount} pageSize = {props.pageSize} onPageChanged = {props.onPageChanged} />
            <div>
                {props.users.map (u => {
                    return (
                        <User user = {u} key = {u.id} { ...props } />
                    )
                })}
            </div>
        </div>
    )
}

export default Users;