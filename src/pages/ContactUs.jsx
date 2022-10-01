import { ContactFormWithText } from "../components/templates/ContactFormWithText";
import { CardGroup } from "../components/templates/CardGroup";
import { FullWidthSection } from "../components/templates/FullWidthSection";
import { PageTitle } from "../components/atoms/PageTitle";

const image = require("../images/winter-white-house-nature.jpg");

export default function Contact() {
    return (
        <>
            <PageTitle
                title="Contact us"
                description="If you have any questions, you can contact us and we'll get right back to you!"
            />
            <img
                src={image}
                alt="white standalone house red roof white mountains snow"
                className="headerImg mb-5"
            />
            <ContactFormWithText />
            <CardGroup />
            <FullWidthSection />
        </>
    );
}
