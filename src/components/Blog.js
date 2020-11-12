import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <Container>
            <h2>Blog</h2>
            <Row>
                <Col>
                    <Link to="/blog">Story 1</Link>
                </Col>
            </Row>
        </Container>
    );
}
