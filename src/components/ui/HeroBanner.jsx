import { baseUrl } from "../../settings/api";
import React, { useState, useEffect } from 'react';

export const HeroBanner = () => {
    const [bannerUrl, setBannerUrl ] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await fetch(baseUrl + "hero-banner?populate=*");

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setBannerUrl(json);
                } else {
                    setErrorMessage("kekw");
                } 
            } catch (error) {
                setErrorMessage(error.toString());
            }
        } 
        fetchBanner();
    }, []);

    if (bannerUrl === null) {
        return <div>Loading...zzzzz</div>
    } 

    if (errorMessage !== null) {
        return <div>{errorMessage}</div>
    }
    return (
        <section className="hero-banner">
            <img src={bannerUrl.data.attributes.Image.data.attributes.url} class="top-img" alt={bannerUrl.data.attributes.Image.data.attributes.alternativeText}/>
            <div className="hero-text-column absolute">
            <span>Explore the best parts of Iceland through</span> 
            <h1>Holidaze</h1>
            </div>
        </section>   
    )
}

