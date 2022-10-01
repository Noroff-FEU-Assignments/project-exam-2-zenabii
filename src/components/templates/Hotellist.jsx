import { fetchHotels } from "../../settings/api";
import React from "react";
import { Card } from "../organisms/Card";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export const Hotellist = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetchHotels().then((hotels) => {
            setLoading(false);
            setHotels(hotels);
        });
    }, []);

    const results =
        searchTerm.length > 1
            ? hotels.filter(
                  (hotel) =>
                      hotel.attributes.title
                          .toLowerCase()
                          .indexOf(searchTerm.toLowerCase()) !== -1
              )
            : hotels;

    if (hotels === null) {
        return (
            <Spinner animation="border" role="status" className="position">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    return (
        <>
            {results.map((hotel) => (
                <Card
                    key={hotel.id}
                    img={hotel.attributes.images.data[0].attributes.url}
                    title={hotel.attributes.title}
                    link={"/hotel/" + hotel.id}
                />
            ))}
        </>
    );
};
