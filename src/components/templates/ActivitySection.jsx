import { TitleTextLarge } from "../molecules/TitleTextLarge";

const image = require("../../images/atlantic-puffin-grass-green.jpg");

export const ActivitySection = () => (
    <section className="two-columns-grid">
        <TitleTextLarge
            theme="blue"
            subject="introduction"
            title="Iceland is a rich country with incredible nature and wildlife"
            paragraph="Activities in Iceland vary from adrenaline-filled adventures to low-key museum visits. They include whale watching in Dalvik, snorkeling in the world’s clearest waters, hiking in the most remote destinations, and hunting the Northern Lights."
            secondParagraph="Join one of our Northern Lights tours in Iceland to experience this majestic natural phenomenon for yourself. The Northern Lights have fascinated onlookers for centuries. I"
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
