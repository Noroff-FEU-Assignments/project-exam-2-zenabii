import { TitleTextLarge } from "../molecules/TitleTextLarge";

const image = require("../../images/atlantic-puffin-grass-green.jpg");

export const ActivitySection = () => (
    <section className="two-columns-grid">
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
        <div className="illustraton-part-right">
            <img
                src={image}
                alt="birds in tall grass in iceland"
                className="illustration"
            />
        </div>
    </section>
);
