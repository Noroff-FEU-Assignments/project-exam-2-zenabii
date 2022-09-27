import { fetchHotel } from "../../settings/api";
import React from "react";
import { useState, useEffect } from "react";
import HotelCarousel from "../organisms/Carousel";
import { Heading } from "../molecules/Heading";
import { Review } from "../molecules/Review";
import { Amenities } from "../atoms/Amenities";
import { Paragraph } from "../atoms/Paragraph";

export const HotelContent = ({ id, handleFetchHotelTitle }) => {
    const [loading, setLoading] = useState(true);
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        fetchHotel(id).then((hotels) => {
            setLoading(false);
            setHotel(hotels);
        });
    }, []);

    useEffect(() => {
        if (hotel?.attributes?.title) {handleFetchHotelTitle("hotel 1")}
    }, [hotel]);

    if (loading === true) {
        return null;
    }

    return (
        <>
            <HotelCarousel
                img1={hotel.attributes.images.data[0].attributes.url}
                img2={hotel.attributes.images.data[1].attributes.url}
                img3={hotel.attributes.images.data[2].attributes.url}
                img4={hotel.attributes.images.data[3].attributes.url}
            />
            <section className="hotelInformation">
                <div>
                    <Heading
                        theme="blue"
                        subject={hotel.attributes.title}
                        title={hotel.attributes.title}
                    />
                    <Review />
                    <Paragraph paragraph={hotel.attributes.information} />
                </div>
                <div className="reverse-flex">
                    <Amenities />
                </div>
            </section>
        </>
    );
};
