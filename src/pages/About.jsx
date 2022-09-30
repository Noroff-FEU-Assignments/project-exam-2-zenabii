import { HeaderText } from "../components/organisms/HeaderText";
import { AboutSection } from "../components/templates/AboutSection";
import { Quote } from "../components/atoms/Quote";
import { AboutSectionCta } from "../components/templates/AboutSectionCta";
import { QnaCta } from "../components/organisms/QnaCta";

export default function About() {
    return (
        <>
            <HeaderText />
            <AboutSection />
            <Quote />
            <AboutSectionCta />
            <QnaCta />
        </>
    );
}
