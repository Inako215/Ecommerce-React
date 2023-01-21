import React, { useState, useEffect } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import Carousel from "react-multi-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";

const FeaturedCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button className="carousel-control-next" onClick={() => onClick()}>
        <FaChevronRight />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button className="carousel-control-prev" onClick={() => onClick()}>
        <FaChevronLeft />
      </button>
    );
  };

  //   useEffect(() => {
  //     setLength(products.length);
  //   }, [products]);

  return (
    <>
      <div className="container-fluid mt-5">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 0.5s linear"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile", "tablet"]}
          itemClass="carousel-item-padding-40-px"
          dotListClass="d-lg-none"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {products.map((product, key) => (
            <FeaturedProductCard product={product} key={key} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default FeaturedCarousel;
