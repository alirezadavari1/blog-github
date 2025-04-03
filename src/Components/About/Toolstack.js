import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiFlutter, SiJavascript } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
                <p>Next.js</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlutter />
                <p>Flutter</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
                <p>ES6</p>
            </Col>
        </Row>
    );
}

export default Toolstack;