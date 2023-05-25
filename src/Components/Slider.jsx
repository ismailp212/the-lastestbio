import React from "react";
import{Swiper , SwiperSlide} from 'swiper/react';
import { Pagination , Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {SliderProducts} from '../data/products';
import '../Style/Slider.css';
function Slider(){
    return(
        <div className="s-container">
<Swiper
    modules={[Pagination, Navigation]}
    className="mySwiper"
    loopFillGroupWithBlank={true}
    slidesPerGroup={1}
    spaceBetween={40}
    navigation={true}
    loop={true}
    slidesPerView={3}
    >
    {SliderProducts.map((slide,i)=>(
        <SwiperSlide>
        <div className="left-s">
            <div className="name">
            <span>{slide.name}</span>
            <span>{slide.detail}</span>
            </div>
            <span>{slide.price}$</span>
            <div>Shop now</div>
        </div>
        <img src={slide.img} alt="product" className="img-p"/>
        </SwiperSlide>
    ))}
    </Swiper>


        </div>
    );
};

export default Slider ;





