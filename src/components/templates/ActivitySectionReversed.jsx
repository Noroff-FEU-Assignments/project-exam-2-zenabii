import { TitleTextLarge } from "../molecules/TitleTextLarge";

const image = require("../../images/horses-nature-iceland.jpg");

export const ActivitySectionReversed = () => (
    <section className="two-columns-grid">
        <div className="illustraton-part-left">
            <img
                src={image}
                alt="two iceland horses looking at camera in nature"
                className="illustration"
            />
        </div>
        <TitleTextLarge
            theme="blue"
            subject="introduction"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci in aliquet.
            Nam a nunc quam. Maecenas lacinia facilisis bibendum. Suspendisse
            potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et
            orci."
            secondParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci in aliquet.
            Nam a nunc quam. Maecenas lacinia facilisis bibendum. Suspendisse
            potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et
            orci."
        />
    </section>
);
