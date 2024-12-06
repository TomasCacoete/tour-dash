import "./Navbar.css"

import LogoWhite from "../../assets/logo-white.svg"

export default function Navbar(){
    return(
        <nav>
            <a href="/tour-dash/#/tour-dash/"><img className="nav-logo" src={LogoWhite}/></a>
            <a href="/tour-dash/#/tour-dash/team/" className="nav-element">Team</a>
            <a className="nav-element">Contacts</a>
        </nav>
    )
}