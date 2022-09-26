import { fetchHotel } from "../../settings/api";
import React from "react";
import { Card } from "../organisms/Card";
import { useState, useEffect } from "react";
import HotelCarousel from "../organisms/Carousel";

export const HotelContent = ({ id }) => {
    const [loading, setLoading] = useState(true);
    const [hotel, setHotel] = useState([]);

    useEffect(() => {
        fetchHotel(id).then((hotels) => {
            setLoading(false);
            setHotel(hotels);
        });
    }, []);

    if (loading === true) {
        return null;
    }
    console.log(hotel.attributes.images.data[1].attributes.url);

    return (
        <>
            <HotelCarousel
                img1={hotel.attributes.images.data[0].attributes.url}
                img2={hotel.attributes.images.data[1].attributes.url}
                img3={hotel.attributes.images.data[2].attributes.url}
                img4={hotel.attributes.images.data[3].attributes.url}
            />
        </>
    );
};
