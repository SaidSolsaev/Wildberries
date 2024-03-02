import React from 'react'
import "./MainIcons.css"
import img from "../../assets/images/logo.png"
import {faStar, faTruckFast, faHandsHolding} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const MainIcons = () => {
    
    return (
        <div class="service-section">
            <div className='container'>
                <div className='item-container'>
                    <div class="service-item">
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        <p>Kvalitetsgaranti på alle bær</p>
                    </div>
                    
                    <div class="service-item">
                        <span><FontAwesomeIcon icon={faTruckFast} /></span>
                        <p>Levering på døren samme dag</p>
                    </div>
                    
                    
                    <div class="service-item">
                        <span><FontAwesomeIcon icon={faHandsHolding}/></span>
                        <p>Ferske & Håndplukkede hver dag</p>
                    </div>
                    
                </div>
            </div>
        
        </div>
    )
}

export default MainIcons