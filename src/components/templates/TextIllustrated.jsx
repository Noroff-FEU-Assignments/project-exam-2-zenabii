import { TitleText } from "../molecules/TitleText";

const image = require("../../images/green-nature-old-house.jpg");

export const TextIllustrated = () => (
    <section className="two-columns-grid">
        <TitleText
            theme="blue"
            subject="introduction"
            title="Holidaze is the best option for you who wishes to travel and explore"
            paragraph="Here at our website you can read more about different activities available
            in Iceland. Iceland is a rich country that has so much to offer for anyone out there!
            "
        />
        <div className="illustraton-part-right">
            <img
                src={image}
                alt="old abondended house in nature"
                className="illustration"
            />
        </div>
    </section>
);
