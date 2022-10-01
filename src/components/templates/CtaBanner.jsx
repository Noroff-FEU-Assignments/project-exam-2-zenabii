import { TitleText } from "../molecules/TitleText";
import { Button } from "../atoms/Button";

const image = require("../../images/green_landscape.jpg");

export const CtaBanner = () => (
    <section className="ctaBanner">
        <img
            src={image}
            className="bannerImg"
            alt="green landscape mountains snow"
        />
        <div className="ctaBannerPosition">
            <TitleText
                theme="white"
                subject="More about our offers"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Button link="FindYourStay" theme="white" text="Send an enquiry" />
        </div>
    </section>
);
