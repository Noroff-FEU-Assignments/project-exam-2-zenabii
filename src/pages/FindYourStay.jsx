import { SearchHeader } from "../components/organisms/SearchHeader";
import { QnaCta } from "../components/organisms/QnaCta";
import { Hotellist } from "../components/templates/Hotellist";
import { TitleText } from "../components/molecules/TitleText";
import { PageTitle } from "../components/atoms/PageTitle";

export default function FindYourStay() {
    return (
        <>
            <PageTitle
                title="Find your stay"
                description="Read more about what you can experience through Holidaze and what activities there are do explore during your stay in Iceland"
            />
            <SearchHeader />
            <div className="absoluteMargin">
                <TitleText
                    theme="blue"
                    subject="Booking"
                    title="Plan your stay"
                />
                <div className="cardGroup">
                    <Hotellist />
                </div>
            </div>
            <QnaCta />
        </>
    );
}
