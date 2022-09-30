import ContactForm from "../organisms/ContactForm";
import { TitleText } from "../molecules/TitleText";
import { Paragraph } from "../atoms/Paragraph";

export const ContactFormWithText = () => (
    <section className="displayGrid">
        <div>
            <TitleText
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
        </div>
        <div>
            <ContactForm />
        </div>
    </section>
);
