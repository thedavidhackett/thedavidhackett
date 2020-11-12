import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function MyWork() {
    return (
        <Container>
            <h2>My Work</h2>
            <Row>
                <Col>
                    <p>
                        Since 2018 I've worked as a web developer at MediaCross,
                        a marketing company in Saint Louis. Below are some of
                        the projects I've worked on during my time at MediaCross
                        that I'm most proud of:
                    </p>
                </Col>
            </Row>
            <Row className="project">
                <Col md="6">
                    <div className="project-description">
                        <h3>Military Sealift Command - Online Application</h3>
                        <p>
                            When we decided to rewrite our ancient, 7 year old
                            job applicant portal our designer said it would be
                            like the TurboTax of online job applications. I'm
                            not so sure that TurboTax is the gold standard of
                            online portals, given for years they've been
                            charging me for doing taxes when they shouldn't
                            have, but in anycase this portal takes applicants
                            through the application process step by step.
                        </p>
                        <p>
                            <strong>The Stack:</strong> JavaScript/React,
                            PHP/Symfony, MySql, Docker
                        </p>
                        <a href="https://apply.sealiftcommand.com/">
                            See the website
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <div className="project-image"></div>
                </Col>
            </Row>
            <Row className="project">
                <Col md="6">
                    <div className="project-image"></div>
                </Col>
                <Col md="6">
                    <div className="project-description">
                        <h3>VizVid</h3>
                        <p>
                            "The" VizVid is a marketing tool, but "a" VizVid is
                            a personalized video I guess? It creates custom
                            videos and sends them to students because we all
                            love seeing our names and faces on things.
                        </p>
                        <p>
                            <strong>The Stack:</strong> JavaScript/React,
                            PHP/Symfony, MySql, Docker
                        </p>
                        <a href="https://vizvid.com/">See the website</a>
                    </div>
                </Col>
            </Row>
            <Row className="project">
                <Col md="6">
                    <div className="project-description">
                        <h3>Digital Viewbooks</h3>
                        <p>
                            Think like a regular viewbook for a college or
                            university, but, you know, digital? What's the
                            difference you ask? Well their customizable, have
                            quizzes which I guess counts as gamefication, and
                            students can put their info in on the website
                            instead of filling out one of those little cards
                            that admissions people carry around all the time.
                        </p>
                        <p>
                            <strong>The Stack:</strong> JavaScript/React/jQuery,
                            PHP/Symfony, Docker
                        </p>
                        <p>
                            <a href="https://makebigmoves.smcsc.edu/">
                                Spartanburg Methodist
                            </a>
                        </p>
                        <p>
                            <a href="https://youatslu.slu.edu/">
                                Saint Louis University
                            </a>
                        </p>
                    </div>
                </Col>
                <Col md="6">
                    <div className="project-image"></div>
                </Col>
            </Row>
        </Container>
    );
}
