import "./index.scss";
import { Link } from "react-router-dom"
import {LogoS} from "../../assets/images/logo-s.png"
import {LogoSub} from "../../assets/images/logo_sub.png";

export default function Sidebar() {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img src={LogoSub} alt="zoheb" />
            </Link>
        </div>
    )
}