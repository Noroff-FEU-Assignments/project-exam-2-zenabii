import { SearchHeader } from "../components/organisms/SearchHeader";
import { QnaCta } from "../components/organisms/QnaCta";
import { Footer } from "../components/organisms/Footer";
import { Hotels } from "../components/templates/Hotellist";

export default function FindYourStay() {
    return (
        <>
            <SearchHeader />
            <div className="absoluteMargin">
                <Hotels />
            </div>
            <QnaCta />
            <Footer />
        </>
    );
}
