import React from "react";
import Logo from '../images/logo-image/logo.jpg';
import{ InboxIcon,
        PhoneIcon,
        LocationMarkerIcon,
        LoginIcon,
        UsersIcon,LinkIcon} from '@heroicons/react/outline';


import '../Style/Footer.css'



function Footer(){
    return(
        <div className="cFooterWrapper">
            {/* <hr /> */}
            <div className="cFooter">
                <div className="logox">
                    <img src={Logo} alt="" />
                    <span>Biomix</span>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Contuct US</span>
                        <span className="pngLine">
                            <LocationMarkerIcon className="icon"/>
                            <span>111 meknes Hay Salam , Rue 14</span>
                        </span>

                        <span className="pngLine">
                            {" "}
                            <PhoneIcon className="icon"/>
                            <a href="tel:0099822876">0099822876</a>
                        </span>

                        <span className="pngLine">
                            <InboxIcon className="icon"/>
                            <a href="mailto:support@biomix.com">support@biomix.com</a>
                        </span>
                    </div>
                </div>


                <div className="block">
                    <div className="detail">
                        <span>Account</span>
                        <span className="pngLine">
                            <LoginIcon className="icon"/>
                            <span><a href="">Sign In</a></span>
                        </span>
                    </div>
                </div>


                <div className="block">
                    <div className="detail">
                        <span>Category</span>
                        <span className="pngLine">
                            <UsersIcon className="icon"/>
                            <a href="/about">
                                <span>About us</span>
                            </a>
                        </span>
                    </div>
                </div>


                <div className="block">
                    <div className="detail">
                        <span>Ressources</span>
                        <span className="pngLine">
                            <LinkIcon className="icon"/>
                            <span><a href="">Safety Privacy & Terms</a></span>
                        </span>
                    </div>
                </div>

                <div className="copyRight">
                    <span>Copyright 2022 by Biomix, Inc.</span>
                    <span>All rights reserved</span>
                </div>

          </div>
    </div>
    )
}


export default Footer ;