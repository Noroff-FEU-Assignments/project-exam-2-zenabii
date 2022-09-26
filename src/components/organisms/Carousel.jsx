import Carousel from "react-bootstrap/Carousel";

function HotelCarousel({ img1, img2, img3, img4 }) {
    return (
        <Carousel variant="dark" interval={null} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselImg"
                    src={img4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HotelCarousel;
