import { useState } from "react";
import s from "./Paginator.module.scss";

const Paginator = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push (i);
    }

    let portionCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let [ portionNumber, setPortionNumber ] = useState (1);
    let leftPortionPageNumber = ( portionNumber - 1 ) * props.pageSize - 1;
    let rigthPortionPageNumber = portionNumber * props.pageSize;

    return (
        <div className = {s.paginator__row} >
            <div className = "btn-group mr-2" role = "group" aria-label = "First group" >
                <div>
                    { portionNumber > 1 &&
                        <button className = {"btn btn-secondary"} onClick = { () => { setPortionNumber (portionNumber - 1) } } >PREV</button> 
                    }
                </div>
                <div>
                    { pages.filter ( p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber )
                    .map ( p => {
                        return <button key = {p} onClick = { (e) => { props.onPageChanged (p) } } type = "button" className = "btn btn-secondary">{p}</button>
                    } ) }
                </div>
                <div>
                    { portionCount > portionNumber &&
                        <button className = {"btn btn-secondary"} onClick = { () => { setPortionNumber (portionNumber + 1) } } >NEXT</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Paginator;