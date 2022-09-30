import { ContactFormWithText } from "../components/templates/ContactFormWithText";
import { CardGroup } from "../components/templates/CardGroup";
import { FullWidthSection } from "../components/templates/FullWidthSection";

const image = require("../images/winter-white-house-nature.jpg");

export default function Contact() {
    return (
        <>
            <img src={image} alt="illustration" className="headerImg mb-5" />
            <ContactFormWithText />
            <CardGroup />
            <FullWidthSection />
        </>
    );
}
