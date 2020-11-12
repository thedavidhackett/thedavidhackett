import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

export default function Header() {
    const [heading, setHeading] = useState("David");
    const headings = [
        "Developer",
        "Designer",
        "Dog Owner",
        "Alliterator",
        "David",
    ];
    function changeHeading(headings) {
        let timeout = 0;
        let increment = 800;
        for (let head of headings) {
            timeout += increment;
            setTimeout(() => {
                setHeading(head);
            }, timeout);
        }
    }
    useEffect(() => {
        changeHeading(headings);
    }, []);

    return (
        <Container>
            <h1>{heading}</h1>
        </Container>
    );
}
