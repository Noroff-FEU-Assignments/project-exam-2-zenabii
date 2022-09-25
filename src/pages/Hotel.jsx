import { HotelContent } from "../components/templates/HotelContent";
import { useParams } from "react-router-dom";

export default function Hotel() {
    const { id } = useParams();

    return (
        <>
            <HotelContent id={id} />
        </>
    );
}
