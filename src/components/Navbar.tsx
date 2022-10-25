import { Link } from "react-router-dom";
import BirdIcon from "./icons/BirdIcon";
import HomeIcon from "./icons/HomeIcon";
import HashtagIcon from "./icons/HashtagIcon";
import BellIcon from "./icons/BellIcon";
import MailIcon from "./icons/MailIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import ListIcon from "./icons/ListIcon";
import MoreIcon from "./icons/MoreIcon";
import ProfileIcon from "./icons/ProfileIcon";
import Options from "./Options";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import {
  Button,
  Col,
  Container,
  Nav,
  Navbar as NavBoot,
} from "react-bootstrap";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const navstyle = { "background-color": "black" };

const Navbar = () => {
  return (
    <Col>
      <Nav style={navstyle} className="bg-white flex-column Navbarcss">
        <Link to="/" style={linkStyle}>
          <Options Icon={BirdIcon} Text=""></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={HomeIcon} Text="Home"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={HashtagIcon} Text="Explore"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={BellIcon} Text="Notifications"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={MailIcon} Text="Messages"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={BookmarkIcon} Text="Bookmarks"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={ListIcon} Text="Lists"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={MoreIcon} Text="Profile"></Options>
        </Link>
        <Link to="/" style={linkStyle}>
          <Options Icon={ProfileIcon} Text="More"></Options>
        </Link>
      </Nav>
    </Col>
  );
};
export default Navbar;
