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
              className="d-block w-60 h-60 mx-auto"
              src={download}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-60 h-60 mx-auto"
              src={images}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60 h-60 mx-auto"
              src={Image}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default CarouselBg;