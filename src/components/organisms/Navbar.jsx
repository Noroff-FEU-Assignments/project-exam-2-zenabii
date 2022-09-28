import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import SeeAndDo from "../../pages/SeeAndDo";
import Contact from "../../pages/ContactUs";
import FindYourStay from "../../pages/FindYourStay";
import Login from "../../pages/Login";
import Admin from "../../pages/Admin";
import Hotel from "../../pages/Hotel";
import logo from "../../images/dark_logo.svg";
import { useState, useEffect } from "react";
import { removeItem, getItem } from "../../settings/store";

function CenteredNavbar() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  console.log(user);
  const login = () => {
    setUser(getItem("user"));
    setToken(getItem("token"));
  };

  useEffect(() => {
    const user = getItem("user");
    if (user) setUser(user);
  }, []);

  const logout = () => {
    removeItem("user");
    removeItem("token");
    setUser("");
    setToken("");
  };

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
        <Navbar expand="lg" className=" d-flex z-index">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto float-right" user={user}>
                <Nav.Link href="/findyourstay">Find your stay</Nav.Link>
                <Nav.Link
                  className={({ isActive }) =>
                    "uppercase" + (isActive ? " active" : "")
                  }
                  href="/seeanddo"
                >
                  See & Do
                </Nav.Link>
                <Nav.Link
                  className={({ isActive }) =>
                    "uppercase" + (isActive ? " active" : "")
                  }
                  href="/about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className={({ isActive }) =>
                    "uppercase" + (isActive ? " active" : "")
                  }
                  href="/contactus"
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  className={({ isActive }) =>
                    "uppercase" + (isActive && !user ? " active" : "")
                  }
                  onClick={() => user && logout()}
                  href={user ? "/" : "/login"}
                >
                  {user ? "sign out" : "sign in"}
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
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/hotel/:id" element={<Hotel />} />
        </Routes>
      </main>
    </Router>
  );
}

export default CenteredNavbar;
