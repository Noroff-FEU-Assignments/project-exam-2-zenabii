import { HeroBanner } from "../components/organisms/HeroBanner";
import { TextIllustrated } from "../components/templates/TextIllustrated";
import { CardGroup } from "../components/templates/CardGroup";
import { Button } from "../components/atoms/Button";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <TextIllustrated />
            <CardGroup />
            <Button link="#" text="press button" theme="black" />
        </>
    );
}
