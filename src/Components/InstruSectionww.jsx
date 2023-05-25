import React, { useRef, useEffect } from 'react';
import '../Style/InstruSectionww.css';

const InstruSectionww = () => {
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
      productContainerRef.current.scrollLeft = 0; // Wrap around to the beginning
    }
  };

  const handlePrevButtonClick = () => {
    productContainerRef.current.scrollLeft -= containerWidthRef.current;

    if (productContainerRef.current.scrollLeft <= 0) {
      productContainerRef.current.scrollLeft = productContainerRef.current.scrollWidth - containerWidthRef.current; // Wrap around to the end
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
        <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card1.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$19.99</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card2.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card3.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card4.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card5.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card6.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card7.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card8.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card9.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                <span className="discount-tag">50% off</span>
                <img src="/images/imagesq/card10.jpg" className="product-thumb" alt="" />
                <button className="card-btn">Ajouter Au Panier</button>
                </div>
                <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <p className="product-short-description">
                    a short line about the cloth..
                </p>
                <span className="price">$20</span>
                <span className="actual-price">$40</span>
                </div>
            </div>
            </div>
            </section>



    )
}


export default InstruSectionww ;