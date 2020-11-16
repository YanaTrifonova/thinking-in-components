import React from "react";

export default function Header() {
    return (
        <header id="header" className="section-header scroll">
            <a href="./">
                <img
                    alt=""
                    className="icon"
                    src="https://learntocodetogether.nl/assets/icon.svg"
                />
            </a>
            <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
                <img
                    alt=""
                    className="meetup-icon"
                    src="https://learntocodetogether.nl/assets/meetup-icon.svg"
                />
            </a>
            <nav>
                <a href="/">Our Courses</a>
            </nav>
        </header>
    );
}
