import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/dark_logo.svg";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function CenteredNavbar({ user, logout }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="navbar-alignment d-flex justify-content-between navBackground">
                <section className="display-grid">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className="d-inline-block svg_logo"
                            alt="Holidaze website logo"
                        />
                    </Navbar.Brand>
                </section>
                <Navbar expand="lg" className=" d-flex z-index">
                    <Container>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            variant="primary"
                            onClick={handleShow}
                        />
                        <Nav
                            className="me-auto float-right d-none d-lg-block"
                            user={user}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    "uppercase" + (isActive ? " active" : "")
                                }
                                href="/about"
                                to="/findyourstay"
                            >
                                Find your stay
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    "uppercase" + (isActive ? " active" : "")
                                }
                                to="/seeanddo"
                            >
                                See & Do
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    "uppercase" + (isActive ? " active" : "")
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    "uppercase" + (isActive ? " active" : "")
                                }
                                to="/contactus"
                            >
                                Contact Us
                            </NavLink>
                            {user && (
                                <NavLink
                                    className={({ isActive }) =>
                                        "uppercase" +
                                        (isActive ? " active" : "")
                                    }
                                    to="/admin"
                                >
                                    Admin panel
                                </NavLink>
                            )}
                            <NavLink
                                className={({ isActive }) =>
                                    "uppercase" +
                                    (isActive && !user ? " active" : "")
                                }
                                onClick={() => user && logout()}
                                to={user ? "/" : "/login"}
                            >
                                {user ? "sign out" : "sign in"}
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Holidaze meny</Offcanvas.Title>
                </Offcanvas.Header>
                <Nav
                    className="me-auto float-right offcanvasStyling"
                    user={user}
                >
                    <NavLink
                        className={({ isActive }) =>
                            "uppercase" + (isActive ? " active" : "")
                        }
                        href="/about"
                        to="/findyourstay"
                    >
                        Find your stay
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "uppercase" + (isActive ? " active" : "")
                        }
                        to="/seeanddo"
                    >
                        See & Do
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "uppercase" + (isActive ? " active" : "")
                        }
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            "uppercase" + (isActive ? " active" : "")
                        }
                        to="/contactus"
                    >
                        Contact Us
                    </NavLink>
                    {user && (
                        <NavLink
                            className={({ isActive }) =>
                                "uppercase" + (isActive ? " active" : "")
                            }
                            to="/admin"
                        >
                            Admin panel
                        </NavLink>
                    )}
                    <NavLink
                        className={({ isActive }) =>
                            "uppercase" + (isActive && !user ? " active" : "")
                        }
                        onClick={() => user && logout()}
                        to={user ? "/" : "/login"}
                    >
                        {user ? "sign out" : "sign in"}
                    </NavLink>
                </Nav>
            </Offcanvas>
        </>
    );
}

export default CenteredNavbar;
