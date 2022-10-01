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
                title="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Proin porta a orci in aliquet. "
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci.
            orci."
            />
            <Button theme="black" link="FindYourStay" text="Send an enquiry" />
        </div>
    </section>
);
