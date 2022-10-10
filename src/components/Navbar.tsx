import { Link } from "react-router-dom";
import BirdIcon from "./icons/BirdIcon";
import HashtagIcon from "./icons/HashtagIcon";
import BellIcon from "./icons/BellIcon";
import MailIcon from "./icons/MailIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import ListIcon from "./icons/ListIcon";
import ProfileIcon from "./icons/ProfileIcon";
import MoreIcon from "./icons/MoreIcon";
import Options from "./Options";
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
      <Nav className="bg-white flex-column align-items-center ps-50px"></Nav>
      <Options Icon={MoreIcon} Text="lol"></Options>
    </Col>
  );
};
export default Navbar;
