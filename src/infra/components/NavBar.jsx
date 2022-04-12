//NavLink component import
import { NavLink } from "./NavLink";
import logo from "./imgs/logo1.png";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { about, api, home, log, svc, ver } from "../routers/paths";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark">
      <Container>
        <NavLink to={home}>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <li>
                <NavLink to={about}>About</NavLink>
              </li>
              <li>
                <NavLink to={api}>API Reference</NavLink>
              </li>
              <li>
                <NavLink to={svc}>Services</NavLink>
              </li>
              <li>
                <NavLink to={ver}>Versions</NavLink>
              </li>
            </ul>
          </Nav>
          <Nav>
            <ul>
              <li>
                <NavLink to={log}>LogIn</NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
