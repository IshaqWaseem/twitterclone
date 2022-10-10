import { Link } from "react-router-dom";
import BirdIcon from "./icons/BirdIcon";
import HashtagIcon from "./icons/HashtagIcon";
import BellIcon from "./icons/BellIcon";
import MailIcon from "./icons/MailIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import ListIcon from "./icons/ListIcon";
import ProfileIcon from "./icons/ProfileIcon";
import MoreIcon from "./icons/MoreIcon";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Col,
  Container,
  Nav,
  Navbar as NavBoot,
} from "react-bootstrap";
import HomeIcon from "./icons/HomeIcon";
const Navbar = () => {
  return (
    <Col>
      <Nav className="bg-white flex-column align-items-center ps-50px">
        <Link to="/">
          <BirdIcon />
        </Link>
        <Link to="/">
          <HomeIcon />
          <span className="link-danger">test</span>
        </Link>
        <Link to="/">
          <HashtagIcon />
        </Link>
        <Link to="/">
          <BellIcon />
        </Link>
        <Link to="/">
          <MailIcon />
        </Link>
        <Link to="/">
          <BookmarkIcon />
        </Link>
        <Link to="/">
          <ListIcon />
        </Link>
        <Link to="/">
          <ProfileIcon />
        </Link>
        <Link to="/">
          <MoreIcon />
        </Link>
      </Nav>
    </Col>
  );
};

export default Navbar;
