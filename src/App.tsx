import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Tweet from "./components/Tweet";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3} md={2}>
            <Navbar />
          </Col>
          <Col xs={10} md={6}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
