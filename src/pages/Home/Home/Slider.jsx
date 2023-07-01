import slide1 from '../../../assets/demoes/demo1/slider/slide-1.png';
import slide2 from '../../../assets/demoes/demo1/slider/slide-2.jpg';
import slide3 from '../../../assets/demoes/demo1/slider/slide-3.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;