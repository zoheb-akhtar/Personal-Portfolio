import "./index.scss";
import { Link, NavLink } from "react-router-dom"
import LogoZ from "../../assets/images/logo-z2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBriefcase, faClose, faEnvelope, faFolder, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


export default function Sidebar() {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoZ} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faFolderOpen} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faBriefcase} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className="close-icon"/>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zoheb-akhtar-593051284/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/zoheb-akhtar">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)}icon={faBars} color="#ffd700" size="3x" className="hamburger-icon"/>
            
        </div>
    )
}