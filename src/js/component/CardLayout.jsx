import React from "react";
import Card from "./Card.jsx";

const CardLayout = () => {
    return (
        <div className="d-flex flex-column flex-md-row container justify-content-between align">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardLayout;