import "./slider.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import Tgdt from "../../assets/trampo-gestordetrafego.png";
import Ti from "../../assets/tic.svg";

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
                <h1>
                  Gestão de tráfego
                  <img src={Ti} alt="foguete" size={24} />
                </h1>
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
                <h1>
                  Social Media
                  <img src={Ti} alt="foguete" size={24} />
                </h1>
                <p>Gestão estratégica de redes sociais</p>
                <hr />
                <ul>
                  <li>Redes sociais atrativas</li>
                  <li>gerar mais alcance</li>
                  <li>estratégia</li>
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
                <h1>
                  Identidade visual
                  <img src={Ti} alt="foguete" size={24} />
                </h1>
                <p>Criação de marca</p>
                <hr />
                <ul>
                  <li>Uma marca unica</li>
                  <li>Fortalecimento de marca</li>
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
                <h1>
                  Desenvolvimento de sites
                  <img src={Ti} alt="foguete" size={24} />
                </h1>
                <p>Site feito sob medida</p>
                <hr />
                <ul>
                  <li>Mais profissionalismo</li>
                  <li>Destaque-se da sua concorrência</li>
                  <li>Venda pela internet</li>
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
                <h1>
                  Consultoria
                  <img src={Ti} alt="foguete" size={24} />
                </h1>
                <p>Estratégias personalizadas para conquistar e manter clientes</p>
                <hr />
                <ul>
                  <li>Focar em melhorias</li>
                  <li>Mostrar o que está dando errado</li>
                  <li>Entregar soluções</li>
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
        <a href="https://wa.me/+554396051358">Quero a ajuda de vocês</a>
      </div>
    </section>
  );
};

export default Slider;
