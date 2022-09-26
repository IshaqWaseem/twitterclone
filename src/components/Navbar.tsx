import BirdIcon from "./icons/BirdIcon";
import HashtagIcon from "./icons/HashtagIcon";

import { Button, Container, Nav, Navbar as NavBoot } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav className="bg-white shadow-sm mb-3 flex-column">
      <Nav.Link to="/" as={NavLink}>
        <BirdIcon />
      </Nav.Link>
      <Nav.Link to="/" as={NavLink}>
        <HashtagIcon />
      </Nav.Link>
      <Nav.Link to="/" as={NavLink}>
        <BirdIcon />
      </Nav.Link>
    </Nav>
  );
};

export default Navbar;
