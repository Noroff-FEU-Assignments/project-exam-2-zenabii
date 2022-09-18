import { HeroBanner } from "../components/organisms/HeroBanner";
import { TextIllustrated } from "../components/templates/TextIllustrated";
import { CardGroup } from "../components/templates/CardGroup";
import { CtaBanner } from "../components/templates/CtaBanner";
import { TextIllustratedButton } from "../components/templates/TextIllustratedButton";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <TextIllustrated />
            <CardGroup />
            <CtaBanner />
            <TextIllustratedButton />
        </>
    );
}
