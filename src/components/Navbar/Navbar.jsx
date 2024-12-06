import "./Navbar.css"

import LogoWhite from "../../assets/logo-white.svg"

export default function Navbar(){
    return(
        <nav>
            <a href="/tour-dash/"><img className="nav-logo" src={LogoWhite}/></a>
            <a href="/tour-dash/team/" className="nav-element">Team</a>
            <a href="/tour-dash/#contacts" className="nav-element">Contacts</a>
        </nav>
    )
}