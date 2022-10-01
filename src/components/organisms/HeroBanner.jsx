import { baseUrl } from "../../settings/api";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export const HeroBanner = () => {
    const [bannerUrl, setBannerUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await fetch(
                    baseUrl + "hero-banner?populate=*"
                );

                if (response.ok) {
                    const json = await response.json();
                    setBannerUrl(json);
                } else {
                    setErrorMessage("Oops! Something failed!");
                }
            } catch (error) {
                setErrorMessage(error.toString());
            }
        };
        fetchBanner();
    }, []);

    if (bannerUrl === null) {
        return (
            <Spinner animation="border" role="status" className="position">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (errorMessage !== null) {
        return <div>{errorMessage}</div>;
    }
    return (
        <section className="hero-banner">
            <img
                src={bannerUrl.data.attributes.Image.data.attributes.url}
                className="top-img"
                alt={
                    bannerUrl.data.attributes.Image.data.attributes
                        .alternativeText
                }
            />
            <div className="hero-text-column absolute">
                <p className="no-margin">
                    Explore the best parts of Iceland through
                </p>
                <h1 className="reduced-line-height">
                    Holi<span className="font-weight">daze</span>
                </h1>
            </div>
        </section>
    );
};
