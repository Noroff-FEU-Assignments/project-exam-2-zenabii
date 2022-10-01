import { Card } from "../organisms/Card";
import { TitleText } from "../molecules/TitleText";
import { fetchFeaturedHotels } from "../../settings/api";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

export const CardGroup = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [featuredHotels, setfeaturedHotels] = useState([]);

    useEffect(() => {
        fetchFeaturedHotels().then((hotels) => {
            setLoading(false);
            setfeaturedHotels(hotels);
        });
    }, []);

    const results =
        searchTerm.length > 1
            ? featuredHotels.filter(
                  (hotel) =>
                      hotel.attributes.title
                          .toLowerCase()
                          .indexOf(searchTerm.toLowerCase()) !== -1
              )
            : featuredHotels;

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="CardGroupComponent">
                <TitleText
                    theme="blue"
                    subject="Booking"
                    title="Plan your stay"
                />
                <div className="cardGroup">
                    {results.map((hotel) => (
                        <Card
                            key={hotel.id}
                            img={hotel.attributes.images.data[0].attributes.url}
                            title={hotel.attributes.title}
                            link={"/hotel/" + hotel.id}
                            alternativetext={
                                hotel.attributes.images.data[0].attributes
                                    .alternativeText
                            }
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
