import { HotelContent } from "../components/templates/HotelContent";
import { useParams } from "react-router-dom";
import { BreadcrumbNav } from "../components/atoms/BreadcrumbNav";
import { QnaCta } from "../components/organisms/QnaCta";
import { useState } from "react";

export default function Hotel() {
    const { id } = useParams();

    const [hotelTitle, setHotelTitle] = useState("");

    const handleFetchHotelTitle = (title) => {
        setHotelTitle(title);
    };

    return (
        <>
            <BreadcrumbNav pathList={["Hotels", hotelTitle]} />
            <HotelContent
                handleFetchHotelTitle={handleFetchHotelTitle}
                id={id}
            />
            <QnaCta />
        </>
    );
}
