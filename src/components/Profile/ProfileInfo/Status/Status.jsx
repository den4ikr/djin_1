import {useState} from "react";
import s from "./Status.module.scss";
import style from "./Status.module.scss";

const Status = (props) => {

    const [ editMode, setEditMode ] = useState (false);
    const [ query, setQuery ] = useState (props.status);

    const goToEditMode = () => {
        setEditMode (true);
    }

    const goOutOdEditMode = () => {
        setEditMode (false);
        props.updateStatus (query);
    }

    const onChange = (e) => {
        setQuery (e.target.value);
    }

    return (
        <div className = {s.status__block} >
            { editMode 
                ? <div> <input autoFocus = {true} onChange = {onChange} type = "text" value = {query} /> <button onClick = { goOutOdEditMode } >Post</button> </div> 
                : <div> Status:  {props.status} <button className = {style.button} onClick = { goToEditMode } >Edit</button> </div> 
            }
        </div>
    )
}

export default Status;