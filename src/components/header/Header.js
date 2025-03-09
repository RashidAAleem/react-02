import { useState } from "react";
import "./header.css"
function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
}

const closeMenu = ()=>{
    setMenuOpen(false);
}



    return(

        <header className="header">
        <nav className="navbar">
            <a href="#" className="nav-logo">Rana Rashid</a>
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
            <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
    )
}
export default Header;