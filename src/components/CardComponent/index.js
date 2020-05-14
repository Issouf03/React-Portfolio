import React from "react";
import CardBodyComponent from "../CardBodyComponent";
import CardImageComponent from "../CardImageComponent";
import CardHeadingComponent from "../CardHeadingComponent";


function CardComponent({ img, title, repo, description }) {
    return (
        <div>
            <CardImageComponent img={img} />
            <CardHeadingComponent title={title} />
            <CardBodyComponent
                repo={repo}
                description={description}
            />

        </div>
    );
}

export default CardComponent;
