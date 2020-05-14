import React from "react";
import { CardText, CardLink } from 'reactstrap';


function CardBodyComponent({ repo, description }) {
    return (
        <CardText className="mx-2">
            <CardLink className="text-success" target="blank" href={repo}>GitHub Repo</CardLink>
            <br></br>
            {description}
        </CardText>
    );
}

export default CardBodyComponent;
