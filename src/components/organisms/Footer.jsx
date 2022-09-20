import Nav from "react-bootstrap/Nav";

import logo from "../../images/dark_logo.svg";

export const Footer = () => (
    <footer className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight logoContainer">
            <img src={logo} alt="Holidaze logo" className="footerLogo" />
            <div>
                <p>Share your experience through Holidaze with #Daze</p>
            </div>
        </div>
        <div className="p-2 flex-fill bd-highlight">
            <Nav defaultActiveKey="/home" className="flex-column">
                <p className="footerTitle">MENY</p>
                <Nav.Link className="uppercase" href="/home">
                    Home
                </Nav.Link>
                <Nav.Link className="uppercase" href="/findyourstay">
                    Find your stay
                </Nav.Link>
                <Nav.Link className="uppercase" href="/seeanddo">
                    See & Do
                </Nav.Link>
                <Nav.Link className="uppercase" href="/about">
                    About
                </Nav.Link>
                <Nav.Link className="uppercase" href="/contactus">
                    Contact Us
                </Nav.Link>
            </Nav>
        </div>
        <div className="p-2 flex-fill bd-highlight">
            <Nav defaultActiveKey="/home" className="flex-column">
                <p className="footerTitle">ADMIN</p>
                <Nav.Link className="uppercase" href="/login">
                    Login
                </Nav.Link>
            </Nav>
        </div>
    </footer>
);
