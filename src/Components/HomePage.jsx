import React from "react";
import Header from './Header';
import Hero from './Hero';
import Collections from './Collections';
import ProductsFilter from './ProductsFilter';
import SpaSlider from './SpaSlider';
import Testimonials from './Testimonials';
import Footer from './Footer';




function HomePage(){
    return(
        <div>
            <Header/>
            <Hero/> 
            <Collections/>
            <ProductsFilter/>
            <SpaSlider/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}


export default HomePage ;