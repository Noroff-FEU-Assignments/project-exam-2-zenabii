import { TitleText } from "../molecules/TitleText";

const image = require("../../images/snow-mountains-white-sky.jpg");

export const AboutSection = () => (
    <section>
        <img
            src={image}
            alt="green tall mountains white sky snow"
            className="bannerImg imgMargin marginTop"
        />
        <div className="sectionWidth">
            <TitleText
                Link="/contactus"
                theme="blue"
                subject="Who are we"
                title="Holidaze is the first and best choice when planning a trip to Iceland"
                paragraph="Holidaze tours will take you to the hidden gems of Iceland’s capital and show you what this charming city has to offer. Delicious food, refreshing drinks, and interesting stories will follow you everywhere you go in Reykjavik. Bursting with life and culture, Reykjavik is one of the most visited cities in Europe, for good reason.r"
                secondParagraph="Choose from the best Iceland vacation packages - here you will find Iceland honeymoon packages, the famous Blue Lagoon Iceland packages, or Iceland hiking tour packages."
            />
        </div>
    </section>
);
