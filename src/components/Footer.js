import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a
                        className="nav-link icon-link"
                        href="https://www.linkedin.com/in/david-hackett-b9368170/"
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link icon-link"
                        href="https://github.com/thedavidhackett"
                    >
                        <FaGithub />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link icon-link"
                        href="https://www.instagram.com/thedavidhackett/"
                    >
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
