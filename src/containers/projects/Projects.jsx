import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './projects.css'
import Ex from '../../assets/exsite.png'
import Ext from '../../assets/exdesign.png'

const Projects = () => {
  return (
    <section>
      <div className="smart__projects">
        <div className="smart__projects-title">
          <h1>nosso trabalho</h1>
          <div className="smart__projects-title_sub">
            <div />
            <p>Portfólio</p>
            <div />
          </div>
        </div>
        <div className="smart__projects-design">
          <div className="smart__projects-design_title">
            <div />
            <h1>design</h1>
          </div>
          <div className="smart__projects-design_cards">
          <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><a href="#"><img src={Ext} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ext} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ext} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ext} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="smart__projects-dev">
          <div className="smart__projects-dev_title">
            <div />
            <h1>dev web</h1>
          </div>
          <div className="smart__projects-dev_cards">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><a href="#"><img src={Ex} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ex} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ex} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
              <SwiperSlide><a href="#"><img src={Ex} className="smart__projects-card_img" alt="dev" /></a></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects