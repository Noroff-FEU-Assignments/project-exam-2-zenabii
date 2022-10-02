import Carousel from "react-bootstrap/Carousel";
import React from "react";

function HotelCarousel({ slides }) {
    return (
        <Carousel variant="dark" interval={null} indicators={false}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block carouselImg"
                        src={slide.url}
                        alt={slide.altText}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default HotelCarousel;
