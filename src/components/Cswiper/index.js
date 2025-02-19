import React, {useEffect, useState} from 'react';
import {Navigation, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './index.module.scss';

export default function Index() {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.swiperDisplay}
      >
        <SwiperSlide>
          <a href='/' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='#' target='_blank'>
            <img src='#' alt=''/>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
