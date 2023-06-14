import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import '../Style/ProductList.css';
import iconcard from '../assets/addcardphotos/shopping.svg'
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ProductList() {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/add_product');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id_prod === product.id_prod);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id_prod === product.id_prod ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id_prod === product.id_prod);
  
    if (existingItem.quantity === 1) {
      const updatedItems = cartItems.filter((item) => item.id_prod !== product.id_prod);
      setCartItems(updatedItems);
    } else {
      const updatedItems = cartItems.map((item) =>
        item.id_prod === product.id_prod ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedItems);
    }
  };
  


  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.actual_price * item.quantity, 0);
  };

  return (
    <div className={`App ${isOpen ? 'active' : ''}`}>
      <Header/>
      <div className="container-plist">
        <header>
          <h1>Nos Produits</h1>
          <div className="shopping-plist" onClick={toggleCart}>
            <img src={iconcard} alt="Shopping Cart" />
            <span className="quantity-plist">{cartItems.length}</span>
          </div>
        </header>

        <div className="list-plist">
          {products.map((product) => {
            const imagePath = product.image.replace('public/', '');
            return(
            <div className="item-plist" key={product.id_prod}>
              <img src={'http://127.0.0.1:8000/storage/'+`${imagePath}`} alt={product.titre} />
              <div className="edit-list-item">
                <div className="title-plist">{product.titre}</div>
                <div className="price-plist">{product.actual_price.toLocaleString()}  DH</div>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
              </div>
            </div>)
          })}
        </div>
      </div>

      <div className="card">
        <h1>Card</h1>
        <div className="total">{calculateTotal().toLocaleString()} DH</div>
        <ul className="listCard">
          {cartItems.map((item) => {
            const imagePath = item.image.replace('public/', '');
              return(
            <li key={item.id_prod}>
              <div>
                <img src={'http://127.0.0.1:8000/storage/'+`${imagePath}`} alt={item.titre} />
              </div>
              <div>{item.titre}</div>
              <div>{item.actual_price.toLocaleString()} DH</div>
              <div>
                <button onClick={() => removeFromCart(item)}>-</button>
                <div className="count">{item.quantity}</div>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </li>)
          })}
        </ul>
        <div className="checkOut">
        <Link to="/order"><div className="valider-card">valider</div></Link>
          <div className="closeShopping" onClick={toggleCart}>
            Annuler
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductList;
