import { TitleText } from "../molecules/TitleText";
import { Button } from "../atoms/Button";

const image = require("../../images/white_house_ocean_nature.jpg");

export const TextIllustratedButton = () => (
    <section className="two-columns-grid">
        <div className="illustraton-part-left">
            <img
                src={image}
                alt="white house grey car ocean"
                className="illustration"
            />
        </div>
        <div className="d-flex flex-column justify-content-center">
            <TitleText
                theme="blue"
                subject="Explore now"
                title="Holidaze is a tailored website for you who wishes to get the most out of your stay"
                paragraph="If you are unsure what you should explore first while you're in Iceland you can send us an email and we'll tailor your trip for you."
            />
            <Button theme="black" link="contactus" text="Send an enquiry" />
        </div>
    </section>
);
