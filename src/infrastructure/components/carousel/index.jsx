import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";
import TextStyle from "../textStyle";
import {
  Button,
  ContainerBackdropCarousel,
  ContainerInformation,
} from "./styled";
import { COLORS } from "../../assets/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Carousel = ({ dataCarousel }) => {
  const isResponsive = useMediaQuery("(max-width:768px)");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '" >' +
        dataCarousel[index]?.nameSlide +
        "</span>"
      );
    },
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: isResponsive ? 2500 : 5000,
          disableOnInteraction: false,
        }}
        pagination={isResponsive ? false : pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {dataCarousel.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <picture width="100%">
                <source srcSet={item.imgMobile} media="(max-width: 768px)" />
                <img src={item.img} alt="foto_banner" width="100%" />
              </picture>
              <ContainerBackdropCarousel>
                <ContainerInformation>
                  <TextStyle
                    color={COLORS.WHITE}
                    size="30px"
                    sizeMobile="24px"
                    bold={500}
                  >
                    {item.title}
                  </TextStyle>
                  <TextStyle color={COLORS.WHITE} type="h2" bold={400}>
                    {item.description}
                  </TextStyle>
                  {item.textButton && <Button>{item.textButton}</Button>}
                </ContainerInformation>
              </ContainerBackdropCarousel>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
