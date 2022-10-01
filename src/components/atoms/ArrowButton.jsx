const svg = require("../../images/arrow-right.svg").default;

export const ArrowButton = () => (
    <div className="arrowButton">
        <img
            src={svg}
            id="animation"
            className="iconWrapper"
            alt="arrow pointing right"
        />
    </div>
);
