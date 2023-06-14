import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Style/Collections.css';

function Collections() {
    const [collections, setCollections] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/add_collection');
        setCollections(response.data);
      } catch (error) {
        console.log(error);
      }
    };



        const productContainerRef = useRef(null);
        const nxtBtnRef = useRef(null);
        const preBtnRef = useRef(null);
        const containerWidthRef = useRef(0);

        useEffect(() => {
            containerWidthRef.current = productContainerRef.current.getBoundingClientRect().width;
        }, []);

        const handleNextButtonClick = () => {
            productContainerRef.current.scrollLeft += containerWidthRef.current;

            if (productContainerRef.current.scrollLeft >= productContainerRef.current.scrollWidth - containerWidthRef.current) {
            productContainerRef.current.scrollLeft = 0;  
            }
        };

        const handlePrevButtonClick = () => {
            productContainerRef.current.scrollLeft -= containerWidthRef.current;

            if (productContainerRef.current.scrollLeft <= 0) {
            productContainerRef.current.scrollLeft = productContainerRef.current.scrollWidth - containerWidthRef.current; 
            }
        };

    return (
        
        <section className="product">
                <button className="pre-btn" ref={preBtnRef} onClick={handlePrevButtonClick}>
                    <img src="/images/imagesq/arrow.png" alt="" />
                </button>
                <button className="nxt-btn" ref={nxtBtnRef} onClick={handleNextButtonClick}>
                    <img src="/images/imagesq/arrow.png" alt="" />
                </button>
            <div className="product-container" ref={productContainerRef}>



            {collections.map((item) => {
              const discount = Math.floor(100 - (item.actual_price * 100) / item.old_price);
              const imagePath = item.photo.replace('public/', '');

              return (
                <div className="product-card" key={item.id}>
                  <div className="product-image">
                    <span className="discount-tag">{discount}% off</span>
                    <img src={`${imagePath}`} className="product-thumb" alt="Collection" />
                    <Link to="/order" ><button className="card-btn">Achetez maintenant</button></Link>
                  </div>
                  <div className="product-info">
                    <h2 className="product-brand">{item.name}</h2>
                    <p className="product-short-description">{item.description}</p>
                    <span className="price">{item.actual_price} DH</span>
                    <span className="actual-price">{item.old_price} DH</span>
                  </div>
                </div>
              );
            })}

      


            </div>     
        </section>
        
    );
}

export default Collections;