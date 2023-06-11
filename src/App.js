// import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider';
import Header from './Components/Header';
import Hero from './Components/Hero';
// import Slider from './Components/Slider';
import Collections from './Components/Collections';
import ProductsFilter from './Components/ProductsFilter';
import SpaSlider from './Components/SpaSlider';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import './Style/scroll-bar.css';
import Tablo from './Components/Tablo';
import DataTest from './Components/DataTest';
function App() {
 
    return (
      <div className="App">
        
     <Header/>
      <Hero/> 
      <Collections/>
      <ProductsFilter/>
      <SpaSlider/>
      <Testimonials/>
      <Footer/>
      {/* <Tablo/> */}
      {/* <DataTest/> */}
      {/* <Slider/> */}
    </div>
    );
}

export default App;






