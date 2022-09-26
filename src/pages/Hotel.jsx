import { HotelContent } from "../components/templates/HotelContent";
import { useParams } from "react-router-dom";
import BreadcrumbNav from "../components/atoms/BreadcrumbNav";

export default function Hotel() {
    const { id } = useParams();

    return (
        <>
            <BreadcrumbNav />
            <HotelContent id={id} />
        </>
    );
}
