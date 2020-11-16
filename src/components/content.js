import React from "react";
import Section from "./section"
import {data} from "../data.js"

export default function Content() {
    return (
        <div className="content">
            {
                data.map((data, index) => {
                    return <Section key={index} badge={data.badge} title={data.title} description={data.description}
                                    images={data.images}/>
                })
            }
        </div>
    );
}
