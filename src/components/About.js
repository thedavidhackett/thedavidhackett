import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";

import Header from "./Header";

export default function About() {
    return (
        <Container>
            <section id="intro">
                <h2>About</h2>
                <Row>
                    <Col>
                        <p className="text-center">
                            <strong>Yep, I'm "the" David Hackett</strong>
                        </p>
                        <p>
                            Why <strong>"the"</strong>? Well remember a time
                            when Facebook was cool and new and "the" Facebook,
                            but then for some reason Justin Timberlake told Mark
                            Zuckerberg to drop the "the"? No? Well you ever
                            notice how Ohio State Football players say "the"
                            Ohio State. That's why. It definitely has nothing to
                            do with what domain name was available.
                        </p>
                    </Col>
                </Row>
            </section>
            <section id="about">
                <Row>
                    <Col md="6">
                        <div className="about-description right-margin">
                            <h2>About</h2>
                            <p>
                                What else could you need to know? Well I was
                                born and raised in Saint Louis (well University
                                City, an inner ring suburb and home to the
                                Loop). After attending Washington University in
                                Saint louis and majoring in English I took my
                                talent to the non-profit sector. For over six
                                years I worked with high school students,
                                helping them get into and complete college. At
                                some point I thought that maybe computers would
                                listen to me better than my students did (I was
                                wrong), but I remain passionate about education.
                                Through LaunchCode I learned to code in Python
                                and Java and landed my first programming job at
                                MediaCross where I now work as a developer.
                            </p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="about-image">
                            <img
                                className="circle-image"
                                src="images/david.jpg"
                            />
                        </div>
                    </Col>
                </Row>
            </section>
            <section id="reviews">
                <h2>Fake Reviews</h2>
                <Row>
                    <Col>
                        <div className="review">
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <blockquote>
                                "Fake reviews? Really? That's kinda played out
                                don't you think?"
                            </blockquote>
                            <span>Roger Ebert</span>
                        </div>
                        <div className="review">
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <blockquote>
                                "David tries real hard to be meta, but if I'm
                                being honest I'm not sure he knows what meta
                                means.""
                            </blockquote>
                            <span>David's 10th Grade English Teacher</span>
                        </div>
                        <div className="review">
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <blockquote>
                                "Even if David doesn't understand the rule of
                                three he always adheres to it.""
                            </blockquote>
                            <span>A former supervisor</span>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
