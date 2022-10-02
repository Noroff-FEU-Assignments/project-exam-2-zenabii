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
            title="Best wildlife watching tours in the land of fire and ice"
            paragraph="Read about the country’s wild animals and embark on wildlife watching tours in Iceland. Seek the arctic fox in Hornstrandir Nature Reserve, go whale watching in the North, and see puffins above the Arctic Circle, and more."
            secondParagraph="Some tours combine wildlife watching with hiking, sea angling, hot spring hunting, and other activities.

            Wildlife watching tours are a great way to get to know Icelandic nature and spend time with family and friends."
        />
    </section>
);
