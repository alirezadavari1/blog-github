import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section">
        <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              باخیال راحت با من <span className="purple"> ارتباط  </span>برقرار کیند
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+98 09926872311" className="con-det">
                  +98 09926872311
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:alireza.davari1425@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  alireza.davari1425@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <p className="con-det">هنرستان،کوچه11</p>
              </div>
            </div>
            <h1>شبکه های اجتماعی</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alirezadavari1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alireza-davari-b0b149239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshmehta._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
