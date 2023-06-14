import React, { useState, useEffect } from 'react';
import '../Style/Services.css';
import Header from '../Components/Header';
import Spa1 from '../assets/Blue-Minimalist-Quotes-Work-Hard-Desktop-Wallpaper.webp';
import Spa2 from '../assets/Relaxation-massage-den-haag-1024x576.webp';
import Spa3 from '../assets/desktop-wallpaper-spa-massage-spa.jpg';
import Spa4 from '../assets/relaxing-spa-orchids-and-bamboo-BRYn-1024x576-MM-80.webp';
import Footer from'../Components/Footer';
import { Link } from 'react-router-dom';



const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=0679392697');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      Contactez sur WhatsApp
    </button>
  );
};




function Services(){

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
      Spa1,
      Spa2,
      Spa3,
      Spa4
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images.length]);
  
    const handleImageChange = (index) => {
      setCurrentImage(index);
    };

    return(
        <div>
            <Header/>
            
    <div className="slidera-container">
      <div className="slidera-overlay">
        <h2>Services</h2>
      </div>
      <div className="slidera-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`
              ${index === currentImage ? 'active' : ''}
              ${index === currentImage - 1 ? 'previous' : ''}
              ${index === currentImage + 1 ? 'next' : ''}
            `}
          />
        ))}
      </div>
      <div className="slidera-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentImage ? 'active' : ''}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
    </div>


        <div className="mouvs" id="mouvs">
            <h1 className="title">Découvrez Nos Services</h1>
            <h2 className="subtitle">
                
Explorez une multitude de services pour le massage et le spa dans notre centre, adaptés à tous les niveaux. Profitez de l'expérience d'un studio chez vous et améliorez votre routine de bien-être.
            </h2>
            <div className="content">
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/images/spa1.jpg" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">massage</p>
                    <strong className="mouv-info">
                    <span>
                    Offrez-vous une pause bien méritée et laissez-vous choyer avec nos massages revitalisants.
                    </span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/images/spa2.jpeg" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">ventouses</p>
                    <strong className="mouv-info">
                    <span>
                    Détendez-vous avec nos massages aux ventouses pour une expérience de bien-être ultime.</span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/images/spa3.jpg" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">gommage</p>
                    <strong className="mouv-info">
                    <span>
                    Ravivez votre peau avec nos gommages visage et profitez d'une apparence éclatante.
                    </span>
                    </strong>
                </div>
                </div>
                <div className="mouv-card">
                <div className="mouv-image">
                    <img src="/images/spa4.webp" />
                </div>
                <div className="mouv-title">
                    <p className="mouv-category">pierres chaudes</p>
                    <strong className="mouv-info">
                    <span>
                    Profitez d'une détente absolue avec nos massages aux pierres chaudes.
                </span>
                    </strong>
                </div>
                </div>
            </div>
            </div>

            <div class="pricing-section">
            <div class="pricing-card">
              <div class="pricing-header">
                <h1>
                  149<small>DH</small>
                </h1>
                <h5>Plan Basique</h5>
              </div>
              <div class="pricing-body">
              <ul>
                <li>Massage Corporel Complet</li>
                <li>Massage Tissu Profond</li>
                <li>Massage aux Pierres Chaudes</li>
                
                </ul>
              </div>
              <a href="" class="btn">Commander Maintenant</a>
            </div>
            <div class="pricing-card">
              <div class="pricing-header">
                <h1>
                349<small>DH</small>
                </h1>
                <h5>Plan Familial</h5>
              </div>
              <div class="pricing-body">
              <ul>
                <li>Massage Corporel Complet</li>
                <li>Massage Tissu Profond</li>
                <li>Massage aux Pierres Chaudes</li>
                <li>Soins des Pieds et des Ongles</li>
                </ul>
              </div>
              <a href="" className="btn">Commander Maintenant</a>

            </div>
            <div class="pricing-card">
              <div class="pricing-header">
                <h1>
                749<small>DH</small>
                </h1>
                <h5>Plan VIP</h5>
              </div>
              <div class="pricing-body">
              <ul>
                <li>Massage Corporel Complet</li>
                <li>Massage Tissu Profond</li>
                <li>Massage aux Pierres Chaudes</li>
                <li>Massage Tissu Molish</li>
                <li>Soins des Pieds et des Ongles</li>
                </ul>
                
              </div>
              <a href="" className="btn">Commander Maintenant</a>
        </div>
    </div>
                    <div className="houres-section">
                    <div class="open-hours-section">
                    <div class="open-hours-container">
                            <h6 >Open Hours</h6>
                            <h1>La meuilleur zone de massage</h1>
                            <p>Réservez dès maintenant pour profiter de nos services de spa et de massage exceptionnels. Ne manquez pas cette opportunité de détente totale !</p>
                            <ul class="list-inline">
                                <li>Lun – Ven : 9:00 AM - 7:00 PM</li>
                                <li>Samedi : 9:00 AM - 6:00 PM</li>
                                <li>Dimanche : Closed</li>
                            </ul>
                            <Link to="/contact" class="btn-contact">Contactez-nous</Link>
                        </div>
                       
                        </div>
                        
                        </div>
                        
                            <div class="image-container">
                                <img class="position-absolute img-fluid shadow-effect" src="images/logo-tharaphi.jpeg" />
                            </div>
                            <WhatsAppButton />       
                    <Footer/>


</div>













        
    )
}

export default Services;