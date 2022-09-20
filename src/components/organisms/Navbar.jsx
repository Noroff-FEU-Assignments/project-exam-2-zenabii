import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import SeeAndDo from "../../pages/SeeAndDo";
import Contact from "../../pages/ContactUs";
import FindYourStay from "../../pages/FindYourStay";
import Login from "../../pages/Login";
import Admin from "../../pages/Admin";
import logo from "../../images/dark_logo.svg";

function CenteredNavbar(props) {
    return (
        <Router>
            <div className="navbar-alignment d-flex justify-content-between">
                <section className="display-grid">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className="d-inline-block svg_logo"
                            alt="Holidaze website logo"
                        />
                    </Navbar.Brand>
                </section>
                <Navbar
                    expand="lg"
                    className={
                        (props.theme === "light"
                            ? "theme-light"
                            : "theme-dark") + " d-flex z-index"
                    }
                >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto float-right">
                                <Nav.Link
                                    className="uppercase"
                                    href="/findyourstay"
                                >
                                    Find your stay
                                </Nav.Link>
                                <Nav.Link
                                    className="uppercase"
                                    href="/seeanddo"
                                >
                                    See & Do
                                </Nav.Link>
                                <Nav.Link className="uppercase" href="/about">
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    className="uppercase"
                                    href="/contactus"
                                >
                                    Contact Us
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/findyourstay" element={<FindYourStay />} />
                    <Route path="/seeanddo" element={<SeeAndDo />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </main>
        </Router>
    );
}

export default CenteredNavbar;
