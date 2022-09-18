import { ArrowButton } from "../atoms/ArrowButton";
const image = require("../../images/green-nature-old-house.jpg");

export const Card = () => (
    <div className="card">
        <img src={image} alt="illustration" className="cardIllustration" />
        <div className="cardBody">
            <h4>Hotel name</h4>
            <ArrowButton link="#" />
        </div>
    </div>
);
