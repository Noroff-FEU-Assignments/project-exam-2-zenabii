import { FullWidthText } from "../molecules/FullWidthText";

const image = require("../../images/iceland-bathing-volcano.jpg");

export const FullWidthSection = () => (
    <section className="ctaBanner">
        <img
            src={image}
            className="bannerImg imgMargin"
            alt="iceland baths tourists volcano water steam"
        />
        <FullWidthText
            theme="blue"
            subject="More about our offers"
            title="Guided tours to Iceland's blue lagoon geothermal soa"
            paragraph="The Blue Lagoon is one of the most popular tourist attractions in Iceland. The blue mineral-rich water leaves your skin soft and smooth after a relaxing visit.

            Shortly after its formation, people began to bathe in the lagoon that proved to have a positive effect on psoriasis and other skin diseases."
            secondParagraph="The Blue Lagoon is located only 20km from Keflavik International Airport, making it very convenient to visit on your way to or from the airport. Check out our Blue Lagoon Tours."
        />
    </section>
);
