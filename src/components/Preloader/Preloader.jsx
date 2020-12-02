import preloader from "../../assets/loading/Blocks-1s-200px.svg";
import s from "./Preloader.module.scss";

const Preloader = (props) => {
    return (
        <div className = {s.row} >
            <img alt = "Loading" src = {preloader} />
        </div>
    )
}

export default Preloader