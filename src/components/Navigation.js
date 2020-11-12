import React, { useState } from "react";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src="images/logo.svg" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/my-work">
                            My Work
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/my-projects">
                            My Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/blog">
                            Blog
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
