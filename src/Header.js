import React, { useEffect, useState } from "react";
import "./app.scss";

export default function Header() {
    const [heading, setHeading] = useState("David");
    const headings = [
        "Developer",
        "Doer",
        "Daughter",
        "Alliterator",
        "What?",
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

    return <h1>{heading}</h1>;
}
