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
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci in aliquet.
            Nam a nunc quam. Maecenas lacinia facilisis bibendum. Suspendisse
            potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et
            orci"
            secondParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci in aliquet.
            Nam a nunc quam. Maecenas lacinia facilisis bibendum. Suspendisse
            potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et
            orci"
        />
    </section>
);
