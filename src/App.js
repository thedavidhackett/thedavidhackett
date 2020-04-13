import React, { useEffect, useState } from "react";
import "./app.scss";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";
import Navigation from "./Navigation";
import Header from "./Header";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Container>
                <Header />
                <section id="intro">
                    <Row>
                        <Col>
                            <p className="text-center">
                                <strong>Hi, I'm "the" David Hackett</strong>
                            </p>
                            <p>
                                Why "the"? Well remember a time when Facebook
                                was cool and new and "the" Facebook, but then
                                for some reason Justin Timberlake told Mark
                                Zuckerberg to drop the "the"? No? Well what
                                about when Ohio State players say "the" Ohio
                                State. Anyway, dated references aside, that's
                                why. It definitely has nothing to do with what
                                domain name was available.
                            </p>
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
                                    "Fake reviews? Really? That's kinda played
                                    out don't you think?"
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
                                    "David tries real hard to be meta, but if
                                    I'm being honest I'm not sure he knows what
                                    meta means.""
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
                                    "Even if David doesn't understand the rule
                                    of three he always adheres to it.""
                                </blockquote>
                                <span>A former supervisor</span>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section id="projects">
                    <h2>Projects</h2>
                    <Row>
                        <Col>
                            <div className="project">
                                <h3>Fantasy Cross Country</h3>
                                <div className="project-content">
                                    <div className="project-description right-margin">
                                        <p>
                                            For several years my old high school
                                            cross country coach and I founded
                                            (perhaps the first and only),
                                            fantasy cross country league. For
                                            year we, along with a collection of
                                            former runners participated in this
                                            league using email and spreasheets.
                                            No longer. Built in golang with a
                                            react frontend this app allows
                                            people to create a league, invite
                                            other players, and playout a season
                                            of Fantasy Cross Country.{" "}
                                        </p>
                                        <a href="https://github.com/davidhackett12/fantasy-crosscountry">
                                            See the source code
                                        </a>
                                    </div>
                                    <div className="project-image">
                                        <img src="images/cross-country.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <h3 className="text-right">
                                    Saint Louis Policy Project
                                </h3>
                                <div className="project-content">
                                    <div className="project-image right-margin">
                                        <img src="images/arch.jpg" />
                                    </div>
                                    <div className="project-description text-right">
                                        <p>
                                            One of my biggest interests is
                                            policy and the impact it has on
                                            individuals and communities. In
                                            particular I want to be able
                                            quantify impact in ways that are
                                            meaningful using rigourous data
                                            analysis while also making that
                                            analysis accesible for a range of
                                            readers. Saint Louis Policy Project
                                            is a data visualization project
                                            built in React, utilizing D3.js. The
                                            data for this project is analyzed
                                            using R.
                                        </p>
                                        <a href="https://github.com/davidhackett12/fantasy-crosscountry">
                                            See the source code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section id="about">
                    <h2>About</h2>
                    <Row>
                        <div className="about-content">
                            <div className="about-image right-margin">
                                <img src="images/david.jpg" />
                            </div>
                            <div className="about-description">
                                <p>
                                    What else could you need to know? Well I was
                                    born and raised in Saint Louis (well
                                    University City, an inner ring suburb and
                                    home to the Loop). After attending
                                    Washington University in Saint louis and
                                    majoring in English I took my talent to the
                                    non-profit sector. For over six years I
                                    worked with high school students, helping
                                    them get into and complete college. At some
                                    point I thought that maybe computers would
                                    listen to me better than my students did (I
                                    was wrong), but I remain passionate about
                                    education. Through LaunchCode I learned to
                                    code in Python and Java and landed my first
                                    programming job at MediaCross where I now
                                    work as a developer.
                                </p>
                            </div>
                        </div>
                    </Row>
                </section>
            </Container>
        </div>
    );
}

export default App;
