import { HotelContent } from "../components/templates/HotelContent";
import { useParams } from "react-router-dom";
import BreadcrumbNav from "../components/atoms/BreadcrumbNav";
import { QnaCta } from "../components/organisms/QnaCta";
import { Footer } from "../components/organisms/Footer";

export default function Hotel() {
    const { id } = useParams();

    return (
        <>
            <BreadcrumbNav />
            <HotelContent id={id} />
            <QnaCta />
            <Footer />
        </>
    );
}
