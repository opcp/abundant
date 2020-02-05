import React from "react";
import Footer from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Map from './map'

function Contact() {
  return (
    <>
      <div className="contact_img">
        <img src="https://i.picsum.photos/id/906/1920/650.jpg" />
      </div>
      <div className="contact_title">
        <span>Contact Us</span>
      </div>
      <Container className="contact_body">
        <Row className="contact_row">
          <Col className="contact_txt" xs={4}>
            <span className="contact_aside">Ask Us </span>
            <span className="contact_aside">Anything!</span>
            <span className="contact_line"></span>
          </Col>
          <Col xs={7} className="contact_input">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input
              placeholder="Type your message here..."
              className="message"
              type="text"
            ></input>
            <a className='submit' href='#' >submit</a>
          </Col>
        </Row>
        <Row className="contact_row">
          <Col className="contact_txt" xs={4}>
            <span className="contact_aside">How to</span>
            <span className="contact_aside">Get Here</span>
            <span className="contact_line"></span>
            <span className='address'>
            Grensásvegur 24, Reykjavík, Iceland
            </span>
          </Col>
          <Col xs={7} className="contact_input">
              <Map/>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Contact;