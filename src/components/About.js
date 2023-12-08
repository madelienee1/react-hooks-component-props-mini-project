import React from "react";
import blogData from "../data/blog";




function About({ logo = "https://via.placeholder.com/215" }) {
    return (
        <aside>
            <img src={logo} alt="blog logo" />
            <p>{blogData.about}</p>
        </aside>
    );
}

export default About;