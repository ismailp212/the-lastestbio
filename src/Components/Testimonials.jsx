import React from "react";
import Hero from '../assets/wwer.png';
import  '../Style/Testimonials.css';
import {TestimonialsData} from "../data/testimonials";
import{Swiper , SwiperSlide} from "swiper/react";
import 'swiper/css';

function Testimonials(){
    return(
        <div className="testimonials">
            <div className="testi-wrapper">
                <div className="testi-container">
                    <span>Top Rated</span>
                    <span>
                    SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.
                    </span>
                </div>
                <img src={Hero} alt="" />
            
            <div className="testi-container">
                <span>100K</span>
                <span>Happy Customers with us</span>
            </div>
        </div>

        <div className="reviews">Reviews</div>
        <div className="carousel">
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            loopFillGroupWithBlank={true}
            className="tCarousel"     
            >
                {
                    TestimonialsData.map((testi,i)=>(
                        <SwiperSlide>
                            <div className="testimonial">
                                <img src={testi.image} alt="" />
                                <span>{testi.comment}</span>
                                <hr />
                                <span>{testi.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>    


    </div>
    )
}


export default Testimonials ;