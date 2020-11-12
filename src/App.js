import React from "react";
import "./app.scss";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import MyWork from "./components/MyWork";
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Header />
                <Switch>
                    <Route path="/my-work">
                        <MyWork />
                    </Route>
                    <Route path="/my-projects">
                        <MyProjects />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/">
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
