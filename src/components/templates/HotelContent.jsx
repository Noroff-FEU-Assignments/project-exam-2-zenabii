import { fetchHotel } from "../../settings/api";
import React from "react";
import { Card } from "../organisms/Card";
import { useState, useEffect } from "react";

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

    return (
        <>
            <div className="container">
                <Card
                    img={hotel.attributes.images.data[0].attributes.url}
                    title={hotel.attributes.title}
                    link={hotel.id}
                />
            </div>
        </>
    );
};
