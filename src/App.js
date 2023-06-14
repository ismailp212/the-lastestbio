// import logo from './logo.svg';      
import './App.css';
import './Style/scroll-bar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import HomePage from './Components/HomePage'
import ProductList from './Components/ProductList';
import Services from './Components/Services';
import Contact from './Components/Contact';
import OrderForm from './Components/OrderForm';
function App() {
 
    return (
      <Router>
        <div className="App">
         <ScrollToTop/>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produits" element={<ProductList />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<OrderForm />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;










