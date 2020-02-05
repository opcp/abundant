import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../Home/Home";
import OurApartment from "../OurApartment/OurApartment";
function Header() {
  return (
    <>
      <Router>
        <Container className="Home_header">
          <Row className="nav_row d-flex ">
            <Col className="d-flex " xs={12}>
              <ul className="navbar_ul">
                <Link className="link" to="/">
                  <li>Home</li>
                </Link>
                <Link className="link" to="/OurApartment">
                  <li>OurApartment</li>
                </Link>
                <Link className="link" to="/Travel">
                  <li>Travel</li>
                </Link>
                <Link className="link" to="/Eat">
                  <li>Eat</li>
                </Link>
                <Link className="link book_btn" to="/OurApartment">
                  <li >
                    <button href="#">Book</button>
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/OurApartment" component={OurApartment}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Header;
