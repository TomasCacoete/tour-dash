import "./Navbar.css"

import LogoWhite from "../../assets/logo-white.svg"

export default function Navbar({ setCurrentPage }) {
    return (
      <nav>
        <img className="nav-logo" src={LogoWhite} alt="Logo" />
        <div onClick={() => setCurrentPage('landing')} className="nav-element">
          Home
        </div>
        <div onClick={() => setCurrentPage('team')} className="nav-element">
          Team
        </div>
        <div onClick={() => setCurrentPage('landing')} className="nav-element">
          Contacts
        </div>
      </nav>
    );
  }