import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iglesia from "../assets/images/iglesia.png";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100;
  object-fit: cover;
`;

const CarouselSlider = () => {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showArrows
      showStatus={false}
      showThumbs={false}
      dynamicHeight
      thumbWidth={100}
    >
      <div>
        <Img src={iglesia} />
      </div>
      <div>
        <Img src={iglesia} />
      </div>
      <div>
        <Img src={iglesia} />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
