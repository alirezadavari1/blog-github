import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile-pic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container dir="rtl" fluid className="home-section" id="home">
        <Particle />
        <Container  className="home-content">
          <Row >
            <Col md={7} className="home-header" style={{textAlign:'right'}}>
              <h1 style={{ paddingBottom: 15 }} className="heading" >
              سلام به همه!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                من
                <strong className="main-name"> علی رضا داوری هستم</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "right" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{borderRadius:'51%'}} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
