import React from 'react';
import HeroImg from '../images/Hero-image/hero-img2.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import '../Style/Hero.css'
import { motion } from 'framer-motion';

function Hero (){
    const transition = {duration:3 , type:"spring"}
    return(
        <div>
        <div className='hero-container'>
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
                <motion.div
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"1rem"}}
                transition={transition} 
                className="greenCircle"
                />
                <motion.img 
                transition={transition}
                initial={{bottom:"-3rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="" width={300}/>

                <motion.div className="cart2"
                transition={transition}
                initial={{right:"5%"}}
                whileInView={{right:"2%"}}
                
                >
                    <RiShoppingBagFill/>
                    <div className="signup">
                        <span>Best Sign Up Offers</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
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
            <div className='nos-produits'> 
                <h1 >Nos Meilleurs Collections</h1>
             </div> 
     </div>
    );
};

export default Hero ;