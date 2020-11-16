import React from "react";
import ImageSection from "./imageSection"
import SectionLine from "../helpers/sectionLine";

export default function Section(props) {
    return (
        <div>
            <div className="section section-what-usp">
                <div className="component-section-header">
                    <div className="title-badge">
                        <div className="title-badge-title">{props.badge}</div>
                    </div>

                    <h2>
                        <div className="component-title ">{props.title}</div>
                    </h2>

                    <div className="description">{props.description}</div>
                </div>
                <div className="component-usp-row">
                    <ImageSection images={props.images}/>
                </div>
            </div>

            <SectionLine/>
        </div>
    );
}
