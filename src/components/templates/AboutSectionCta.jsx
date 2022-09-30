import { TitleText } from "../molecules/TitleText";
import { Paragraph } from "../atoms/Paragraph";

const image = require("../../images/vehicles-mountains-lake.jpg");

export const AboutSectionCta = () => (
    <section className="two-columns-grid">
        <div className="illustraton-part-left">
            <img src={image} alt="illustration" className="illustration" />
        </div>
        <div className="d-flex flex-column justify-content-center">
            <TitleText
                theme="blue"
                subject="Explore now"
                title="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Proin porta a orci in aliquet. "
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucib us massa at auctor lacinia. Proin porta a orci in aliquet. Nam a nunc quam. Maecenas lacinia facilisis bibendum. Quam Suspendisse potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et orci.."
                secondParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucib us massa at auctor lacinia. Proin porta a orci in aliquet. Nam a nunc quam. Maecenas lacinia facilisis bibendum. Quam Suspendisse potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et orci. "
            />
        </div>
    </section>
);
