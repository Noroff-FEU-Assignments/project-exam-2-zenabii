import { SearchHeader } from "../components/organisms/SearchHeader";
import { QnaCta } from "../components/organisms/QnaCta";
import { Hotellist } from "../components/templates/Hotellist";
import { TitleText } from "../components/molecules/TitleText";

export default function FindYourStay() {
    return (
        <>
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
