import Carousel from "react-bootstrap/Carousel";

function HotelCarousel({ slides }) {
    return (
        <Carousel variant="dark" interval={null} indicators={false}>
            {slides.map((slide) => (
                <Carousel.Item>
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
