import { ActivityBanner } from "../components/organisms/ActivityBanner";
import { ActivitySection } from "../components/templates/ActivitySection";
import { FullWidthSection } from "../components/templates/FullWidthSection";
import { ActivitySectionReversed } from "../components/templates/ActivitySectionReversed";
import { PageTitle } from "../components/atoms/PageTitle";

export default function SeeAndDo() {
    return (
        <>
            <PageTitle
                title="See and Do"
                description="incredible booking offers and locations."
            />
            <ActivityBanner />
            <ActivitySection />
            <FullWidthSection />
            <ActivitySectionReversed />
        </>
    );
}
