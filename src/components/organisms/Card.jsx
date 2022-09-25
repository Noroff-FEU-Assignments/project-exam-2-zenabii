import { ArrowButton } from "../atoms/ArrowButton";
const image = require("../../images/green-nature-old-house.jpg");

export const Card = ({ img, title, link }) => (
    <div className="card">
        <img src={img} alt="illustration" className="cardIllustration" />
        <div className="cardBody">
            <h4>{title}</h4>
            <ArrowButton link={link} />
        </div>
    </div>
);
