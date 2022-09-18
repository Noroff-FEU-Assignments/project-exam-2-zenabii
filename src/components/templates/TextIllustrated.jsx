import { TitleText } from "../atoms/TitleText";

const image = require("../../images/green-nature-old-house.jpg");

export const TextIllustrated = () => (
    <section className="two-columns-grid">
        <TitleText
            theme="blue"
            subject="introduction"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia. Proin porta a orci in aliquet.
            Nam a nunc quam. Maecenas lacinia facilisis bibendum. Suspendisse
            potenti. Vivamus erat ligula, iaculis quis pulvinar id, imperdiet et
            orci."
        />
        <div className="illustraton-part-right">
            <img src={image} alt="illustration" className="illustration" />
        </div>
    </section>
);
