import React from 'react';
import HeroImg from '../images/Hero-image/hero-img2.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import '../Style/Hero.css'
function Hero (){
    return(

        <div className='container'>
            <div className="h_sides">
                <span className='text1'>Skin protection cream</span>
                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>
                        somting is very special here try to get your health body with our bio products.
                    </span>
                </div>
            </div>
            <div className="wrapper">
                <div className="blueCircle"></div>
                <img src={HeroImg} alt="" width={300}/>
                <div className="cart2">
                    <RiShoppingBagFill/>
                    <div className="signup">
                        <span>Best Sign Up Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div>    
             <div className="h_sides">
                <div className="traffic">
                    <span>1.2M</span>
                    <span>Mounthly Traffic</span>            
                </div>
                <div className="customers">
                    <span>100K</span>
                    <span>Happy Customers</span>
                </div>
             </div>   
        </div>
    );
};

export default Hero ;