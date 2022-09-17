import { Link } from "react-router-dom";

const svg = require("../../images/arrow-right.svg").default;

export const ArrowButton = ({ link }) => (
    <Link to={link} className="arrowButton">
        <img src={svg} className="iconWrapper" alt="arrow pointing right" />
    </Link>
);
