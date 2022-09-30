import { HeaderText } from "../components/organisms/HeaderText";
import { AboutSection } from "../components/templates/AboutSection";
import { Quote } from "../components/atoms/Quote";
import { AboutSectionCta } from "../components/templates/AboutSectionCta";
import { QnaCta } from "../components/organisms/QnaCta";
import { PageTitle } from "../components/atoms/PageTitle";

export default function About() {
    return (
        <>
            <PageTitle
                title="About us"
                description="Read more about what you can experience through Holidaze and what activities there are do explore during your stay in Iceland"
            />
            <HeaderText />
            <AboutSection />
            <Quote />
            <AboutSectionCta />
            <QnaCta />
        </>
    );
}
