import { SearchHeader } from "../components/organisms/SearchHeader";
import { HotelCards } from "../components/templates/HotelCards";
import { QnaCta } from "../components/organisms/QnaCta";
import { Footer } from "../components/organisms/Footer";

export default function FindYourStay() {
    return (
        <>
            <SearchHeader />
            <div className="absoluteMargin">
                <HotelCards />
            </div>
            <QnaCta />
            <Footer />
        </>
    );
}
