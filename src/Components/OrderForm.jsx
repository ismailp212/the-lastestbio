import React, { useState } from 'react';
import '../Style/OrderForm.css';
import Header from './Header';
import Footer from './Footer';
const OrderForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
  };

  return (
    <div>
    <Header/>
    <div className="order-form-container">
      <img className="logi-image" src="./images/logo-tharaphi.jpeg" alt="Tharaphi-Logo" />
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Enregistrer Votre Commande</h2>
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro de Téléphone</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderForm;
