import { Button } from "../atoms/Button";

export const Review = () => (
    <div className="reviewColumn">
        <div className="reviewSection">
            <span>
                <p className="threeRem no-margin">4.5</p>
            </span>
            <span className="scoreContainer">
                <p className="no-margin reviewRating">Excellent</p>
                <p className="no-margin reviewPlacement">
                    #14 of 59 hotels in Reykjavik
                </p>
            </span>
        </div>
        <Button theme="black" link="#" text="Send a request" />
    </div>
);
