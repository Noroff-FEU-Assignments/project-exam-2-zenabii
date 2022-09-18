import { HeroBanner } from "../components/organisms/HeroBanner";
import { TextIllustrated } from "../components/templates/TextIllustrated";
import { CardGroup } from "../components/templates/CardGroup";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <TextIllustrated />
            <CardGroup />
        </>
    );
}
