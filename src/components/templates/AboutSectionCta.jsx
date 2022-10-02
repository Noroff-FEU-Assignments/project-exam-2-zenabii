import { TitleText } from "../molecules/TitleText";

const image = require("../../images/vehicles-mountains-lake.jpg");

export const AboutSectionCta = () => (
    <section className="two-columns-grid">
        <div className="illustraton-part-left">
            <img
                src={image}
                alt="white vehicles driving across iceland roads"
                className="illustration"
            />
        </div>
        <div className="d-flex flex-column justify-content-center">
            <TitleText
                theme="blue"
                subject="Explore now"
                title="Guided sightseeing tours in Iceland"
                paragraph="Holidaze offers a wide range of sightseeing tours of Iceland, of various length and difficulty levels. Whether you would explore the areas around Reykjavik or go around the whole island, our day tours or multiday tours will take you on an easy and safe journey."
                secondParagraph="Lava cave tours in Iceland prove that the country is full of surprises — both on the ground and underneath it. Huge lava fields on the surface cover miles and miles of underground tunnels."
            />
        </div>
    </section>
);
