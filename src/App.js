// import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider';
import Header from './Components/Header';
import Hero from './Components/Hero';
// import Slider from './Components/Slider';
import InstruSectionww from './Components/InstruSectionww';
import ProductsFilter from './Components/ProductsFilter';
import SpaSlider from './Components/SpaSlider';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import './Style/scroll-bar.css';
function App() {
 
    return (
      <div className="App">
     <Header/>
      <Hero/> 
      {/* <Slider/> */}
      <InstruSectionww/>
      <ProductsFilter/>
      <SpaSlider/>
      <Testimonials/>
      {/* <Slider/> */}
      <Footer/>

    </div>
    );
}

export default App;
