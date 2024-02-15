import "./slider.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import Tgdt from '../../assets/trampo-gestordetrafego.png'
import Ti from '../../assets/tic.svg'

const Slider = () => {
  return (
    <section className="wake__slide">
      <div className="wake__slide-title">
        <h1>
          Conheça o que a <b>Wake pode trazer</b> para a sua empresa.
        </h1>
      </div>
      <div className="wake__slide-slider">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-card">
              <div className="up">
                <div>
                  <img src={Ti} alt="fugueti" size={24} />
                </div>
                <h1>Gestão de tráfego</h1>
                <p>Gestão de anúncios online no Google e Meta</p>
                <hr />
                <ul>
                  <li>Alcance específico</li>
                  <li>Destaque entre a concorrÊncia</li>
                  <li>Monitoramento de campanha</li>
                </ul>
              </div>
              <div className="down">
                <img src={Tgdt} alt="img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <div className="up">
                <div>
                  <img src={Ti} alt="fugueti" size={24} />
                </div>
                <h1>Gestão de tráfego</h1>
                <p>Gestão de anúncios online no Google e Meta</p>
                <hr />
                <ul>
                  <li>Alcance específico</li>
                  <li>Destaque entre a concorrÊncia</li>
                  <li>Monitoramento de campanha</li>
                </ul>
              </div>
              <div className="down">
                <img src={Tgdt} alt="img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <div className="up">
                <div>
                  <img src={Ti} alt="fugueti" size={24} />
                </div>
                <h1>Gestão de tráfego</h1>
                <p>Gestão de anúncios online no Google e Meta</p>
                <hr />
                <ul>
                  <li>Alcance específico</li>
                  <li>Destaque entre a concorrÊncia</li>
                  <li>Monitoramento de campanha</li>
                </ul>
              </div>
              <div className="down">
                <img src={Tgdt} alt="img" />
              </div>
            </div>
          </SwiperSlide>
          

        </Swiper>
      </div>
      <div className="wake__slide-btn">
        <a href="#">Quero a ajuda de vocês</a>
      </div>
    </section>
  );
};

export default Slider;
