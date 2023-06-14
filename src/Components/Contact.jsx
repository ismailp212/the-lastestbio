import React from "react";
import '../Style/Contact.css'
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    return (
        <div>
            <Header/>
                <div className="contact-us-container">
                <div className="form-container">
                    <form action="/contact" method="post" className="contact-form">
                    <h1>Contactez-Nous</h1>
                    <hr/>
                    <div className="form-row">
                    <div>
                        <label htmlFor="name" style={{"fontWeight":500}}>Nom:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" style={{"fontWeight":500}}>Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    </div>
                    <label htmlFor="subject" style={{"fontWeight":500}}>Sujet:</label>
                    <input type="text" id="subject" name="subject" required />
            
                    <label htmlFor="message" style={{"fontWeight":500}}>Message:</label>
                    <textarea id="message" name="message" required></textarea>
            
                    <input type="submit" value="Envoyer Message" />
                    </form>
                </div>
                <div className="logo-container">
                    <img src="images/logo-tharaphi.jpeg" alt="Logo" className="logo-image" />
                </div>
                </div>
                <Footer/>
        </div> 
      );
    
}



export default Contact ;