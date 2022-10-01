import Carousel from "react-bootstrap/Carousel";

function HotelCarousel({
    img1,
    img2,
    img3,
    img4,
    alternativeText1,
    alternativeText2,
    alternativeText3,
    alternativeText4,
}) {
    return (
        <Carousel variant="dark" interval={null} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img1}
                    alt={alternativeText1}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img2}
                    alt={alternativeText2}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img3}
                    alt={alternativeText3}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img4}
                    alt={alternativeText4}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HotelCarousel;
