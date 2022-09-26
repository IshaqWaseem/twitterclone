import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={1}>
            <Navbar />
          </Col>
          <Col xs={6}>
            <Router>
              <Switch>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
