import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function MyProjects() {
    return (
        <Container>
            <h2>My Projects</h2>
            <Row className="project">
                <Col md="6">
                    <div className="project-description">
                        <h3>Fantasy Cross Country</h3>
                        <p>
                            For several years my old high school cross country
                            coach and I founded (perhaps the first and only),
                            fantasy cross country league. For year we, along
                            with a collection of former runners participated in
                            this league using email and spreasheets. No longer.
                            Built in golang with a react frontend this app
                            allows people to create a league, invite other
                            players, and playout a season of Fantasy Cross
                            Country.{" "}
                        </p>
                        <a href="https://github.com/davidhackett12/fantasy-crosscountry">
                            See the source code
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <div className="project-image">
                        <img
                            className="circle-image"
                            src="images/cross-country.jpg"
                        />
                    </div>
                </Col>
            </Row>
            <Row className="project">
                <Col md="6">
                    <div className="project-image">
                        <img className="circle-image" src="images/arch.jpg" />
                    </div>
                </Col>
                <Col md="6">
                    <div className="project-description">
                        <h3>Saint Louis Policy Project</h3>
                        <p>
                            One of my biggest interests is policy and the impact
                            it has on individuals and communities. In particular
                            I want to be able quantify impact in ways that are
                            meaningful using rigourous data analysis while also
                            making that analysis accesible for a range of
                            readers. Saint Louis Policy Project is a data
                            visualization project built in React, utilizing
                            D3.js. The data for this project is analyzed using
                            R.
                        </p>
                        <a href="https://github.com/davidhackett12/fantasy-crosscountry">
                            See the source code
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
