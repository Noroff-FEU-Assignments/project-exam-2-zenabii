import { TitleText } from "../molecules/TitleText";
import { Paragraph } from "../atoms/Paragraph";

const image = require("../../images/snow-mountains-white-sky.jpg");

export const AboutSection = () => (
    <section>
        <img
            src={image}
            alt="illustration"
            className="bannerImg imgMargin marginTop"
        />
        <div className="sectionWidth">
            <TitleText
                theme="blue"
                subject="Who are we"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucib us massa at auctor lacinia. Proin porta a orci in aliquet. Nam a nunc quam. Maecenas lacinia facilisis bibendum. Quam Suspendisse potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et orci. "
                secondParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucib us massa at auctor lacinia. Proin porta a orci in aliquet. Nam a nunc quam. Maecenas lacinia facilisis bibendum. Quam Suspendisse potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et orci. "
            />
        </div>
    </section>
);
