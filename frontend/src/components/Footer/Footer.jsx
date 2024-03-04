import React from 'react'
import "./Footer.css";
import {faPaperPlane, faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom"


export default function Footer() {    

    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <div className="footer-col__company">
                            <img src={logo} alt='logo'/>
                            <h4>Wildberries AS</h4>
                            <p>Vi selger norske bær</p>
                        </div>
                    </div>
                    
                    <div className="footer-col">
                        <h4 className="footer-col__title">Kundeservice</h4>
                        <ul className="footer-col__list">
                            <li>
                                <Link>Kontakt oss</Link>
                            </li>
                            <li>
                                <Link>Klikk & hent</Link>
                            </li>
                            <li>
                                <Link>Spørsmål og svar</Link>
                            </li>
                            <li>
                                <Link>Leveringsbetingelser</Link>
                            </li>
                        </ul>
                    </div>
                    
                    
                    
                    <div className="footer-col">
                        <h4 className="footer-col__title">Om oss</h4>
                        <ul className="footer-col__list">
                            <li>
                                <Link>Våre stands</Link>
                            </li>
                            <li>
                                <Link>Ledige Stillinger</Link>
                            </li>
                            <li>
                                <Link>Om Wildberries</Link>
                            </li>
                            
                        </ul>
                        
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col__title">Kundesenter</h4>
                        <ul className="footer-col__list">
                            
                            <li className='contactList'>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                <p>+47 123 12 123</p>
                            </li>
                            <li className='contactList'>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <p>Wildberries@mail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}