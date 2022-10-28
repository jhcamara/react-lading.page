import React from "react";
import Card from "./Card";

const CardLayout = () => {
    return (
        <div className="d-flex container">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardLayout;