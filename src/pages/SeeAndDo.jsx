import { ActivityBanner } from "../components/organisms/ActivityBanner";
import { ActivitySection } from "../components/templates/ActivitySection";
import { FullWidthSection } from "../components/templates/FullWidthSection";
import { ActivitySectionReversed } from "../components/templates/ActivitySectionReversed";

export default function SeeAndDo() {
    return (
        <>
            <ActivityBanner />
            <ActivitySection />
            <FullWidthSection />
            <ActivitySectionReversed />
        </>
    );
}
