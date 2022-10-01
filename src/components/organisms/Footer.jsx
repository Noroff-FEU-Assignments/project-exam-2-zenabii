import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import logo from "../../images/dark_logo.svg";

export const Footer = () => (
    <footer className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight logoContainer">
            <img src={logo} alt="Holidaze logo" className="footerLogo" />
            <div>
                <p className="text-align">
                    Share your experience through Holidaze with #Daze
                </p>
            </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
            <Nav defaultActiveKey="/" className="flex-column">
                <p className="footerTitle">MENY</p>
                <NavLink className="uppercase" to="/">
                    Home
                </NavLink>
                <NavLink className="uppercase" to="/findyourstay">
                    Find your stay
                </NavLink>
                <NavLink className="uppercase" to="/seeanddo">
                    See & Do
                </NavLink>
                <NavLink className="uppercase" to="/about">
                    About
                </NavLink>
                <NavLink className="uppercase" to="/contactus">
                    Contact Us
                </NavLink>
            </Nav>
        </div>
        <div className="p-2 flex-fill bd-highlight">
            <Nav defaultActiveKey="/home" className="flex-column">
                <p className="footerTitle">ADMIN</p>
                <NavLink className="uppercase" to="/login">
                    Login
                </NavLink>
            </Nav>
        </div>
    </footer>
);
