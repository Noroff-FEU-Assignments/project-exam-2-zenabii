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
    }, [id]);

    useEffect(() => {
        if (hotel?.attributes?.title) {
            handleFetchHotelTitle(hotel?.attributes?.title);
        }
    }, [handleFetchHotelTitle, hotel]);

    if (loading === true) {
        return null;
    }

    return (
        <>
            <HotelCarousel
                slides={hotel.attributes.images.data.map((image) => ({
                    url: image.attributes.url,
                    altText: image.attributes.alternativeText,
                }))}
            />
            <section className="hotelInformation">
                <div>
                    <Heading
                        theme="blue"
                        subject={hotel.attributes.title}
                        title={hotel.attributes.title}
                    />
                    <Review
                        id={hotel.id}
                        title={hotel.attributes.title}
                        img={hotel.attributes.images.data[0].attributes.url}
                    />
                    <Paragraph paragraph={hotel.attributes.information} />
                </div>
                <div className="reverse-flex">
                    <Amenities />
                </div>
            </section>
        </>
    );
};
