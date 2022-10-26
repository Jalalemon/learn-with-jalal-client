import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image from './image.png'
import download from './download.jpeg'
import images from './images.png'
const CarouselBg = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 mx-auto"
              src={download}
              alt="First slide"
            />
            <Carousel.Caption className="text-danger">
              <h3>Learn With Jalal</h3>
              <p>
                Everything starts on the client side, before sending the main
                request.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 mx-auto"
              src={images}
              alt="Second slide"
            />
            <Carousel.Caption className="text-primary">
              <h3>Learn with Jalal</h3>
              <p>
                Everything starts on the client side, before sending the main
                request.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto"
              src={Image}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Learn with Jalal</h3>
              <p>
                Everything starts on the client side, before sending the main
                request.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default CarouselBg;