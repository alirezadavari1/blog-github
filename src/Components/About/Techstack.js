import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { SiRedux, SiTailwindcss, SiBootstrap, SiGithub, SiTensorflow } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
                <p>HTML</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
                <p>CSS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJsBadge />
                <p>JavaScript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <p>React</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
                <p>Redux</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiSass />
                <p>Sass</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
                <p>Bootstrap</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
                <p>Tailwind</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
                <p>GitHub</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
                <p>AI (TensorFlow)</p>
            </Col>
        </Row>
    );
}

export default Techstack;