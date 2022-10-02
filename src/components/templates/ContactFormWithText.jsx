import { ContactForm } from "../organisms/ContactForm";
import { TitleText } from "../molecules/TitleText";

export const ContactFormWithText = () => (
    <section className="displayGrid">
        <div>
            <TitleText
                theme="blue"
                subject="introduction"
                title="If you can't find what you're looking for on the website - send us a message and we will provide it for you"
                paragraph="Holidaze tours will take you to the hidden gems of Iceland's capital and show you what this charming city has to offer. Delicious food, refreshing drinks, and interesting stories will follow you everywhere you go in Reykjavik. Bursting with life and culture, Reykjavik is one of the most visited cities in Europe, for good reason."
                secondParagraph="Iceland is home to the world-famous Blue Lagoon and other geothermal baths. Cap off your Golden Circle tour with a soothing dip into all-natural, mineral-rich waters. A few indulgent hours in heated pools are the perfect way to wrap up a day of sightseeing and adventure."
            />
        </div>
        <div>
            <ContactForm />
        </div>
    </section>
);
