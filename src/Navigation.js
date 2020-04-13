import React, { useState } from "react";
import "./app.scss";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";

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
                        <NavLink href="#reviews">Reviews</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about">About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
