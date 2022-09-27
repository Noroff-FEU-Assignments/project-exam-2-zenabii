import { HotelContent } from "../components/templates/HotelContent";
import { useParams } from "react-router-dom";
import { BreadcrumbNav } from "../components/atoms/BreadcrumbNav";
import { QnaCta } from "../components/organisms/QnaCta";
import { Footer } from "../components/organisms/Footer";
import { useState } from "react";

export default function Hotel() {
    const { id } = useParams();

    const [hotelTitle, setHotelTitle] = useState("");

    const handleFetchHotelTitle = (test) => {
        setHotelTitle(test);
    };
    console.log("hotel " + hotelTitle);

    return (
        <>
            <BreadcrumbNav hotelTitle={hotelTitle} pathList={["Hotels", hotelTitle]}/>
            <HotelContent handleFetchHotelTitle={handleFetchHotelTitle} id={id} />
            <QnaCta />
            <Footer />
            {console.log(hotelTitle)}
        </>
    );
}
