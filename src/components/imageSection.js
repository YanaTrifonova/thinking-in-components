import React from "react";

export default function ImageSection(props) {
    return (
        props.images.map((img, index) => {
            return (
                <div className="item team" key={index}>
                    <img
                        alt=""
                        className="image"
                        style={{width: "200px"}}
                        src={img.imgUrl}
                    />
                    <div className="component-title title">{img.imgTitle}</div>
                    <div className="description"> {img.imgDescription}</div>
                </div>
            )
        })
    );
}
