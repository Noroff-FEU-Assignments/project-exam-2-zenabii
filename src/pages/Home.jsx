import { HeroBanner } from "../components/organisms/HeroBanner";
import { TextIllustrated } from "../components/templates/TextIllustrated";
import { CardGroup } from "../components/templates/CardGroup";
import { CtaBanner } from "../components/templates/CtaBanner";
import { TextIllustratedButton } from "../components/templates/TextIllustratedButton";
import { PageTitle } from "../components/atoms/PageTitle";

export default function Home() {
    return (
        <>
            <PageTitle
                title="Home"
                description="Welcome to Holidaze! We are the first step towards your amazing trip in Iceland, we offer incredible booking offers and locations."
            />
            <HeroBanner />
            <TextIllustrated />
            <CardGroup />
            <CtaBanner />
            <TextIllustratedButton />
        </>
    );
}
