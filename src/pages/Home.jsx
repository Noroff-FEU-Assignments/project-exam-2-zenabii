import { HeroBanner } from "../components/ui/HeroBanner";
import { TextIllustrated } from "../components/ui/homepage/TextIllustrated";
import { FeaturedItems } from "../components/ui/homepage/FeaturedItems";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <TextIllustrated />
            <FeaturedItems />
        </>
    );
}
