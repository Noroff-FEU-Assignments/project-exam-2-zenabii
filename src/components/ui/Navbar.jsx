import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import SeeAndDo from '../../pages/SeeAndDo';
import Contact from '../../pages/ContactUs';
import FindYourStay from '../../pages/FindYourStay';
import logo from '../../images/dark_logo.svg'

function CenteredNavbar(props) {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className={(props.theme === "light" ? "theme-light" : "theme-dark") + " d-flex"}>
        <Container>
          <Navbar.Brand href="/">            
              <img
              src={logo}
              className="d-inline-block align-top svg_logo"
              alt="Holidaze website logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="me-auto float-right">
              <Nav.Link href="/findyourstay">Find your stay</Nav.Link>
              <Nav.Link href="/seeanddo">See & Do</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/findyourstay" element={<FindYourStay />} />
          <Route path="/seeanddo" element={<SeeAndDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default CenteredNavbar;