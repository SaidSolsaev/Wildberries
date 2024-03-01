import React from 'react'
import "./MainIcons.css"
import img from "../../assets/images/logo.png"

const MainIcons = () => {
    
    return (
        <div class="service-section">
            <div class="service-item">
                <img src={img} alt="Kvalitetsgaranti" />
                <h3>Kvalitetsgaranti på alle blomster og planter</h3>
            </div>
            
            <div class="service-item">
                <img src={img} alt="Levering samme dag" />
                <h3>Levering på døren samme dag</h3>
            </div>
            
            <div class="service-item">
                <img src={img} alt="Norges beste kundesenter 2023" />
                <h3>Norges beste kundesenter 2023</h3>
            </div>
            
            <div class="service-item">
                <img src={img} alt="Ekte håndverk - høy fagkunnskap" />
                <h3>Ekte håndverk - høy fagkunnskap</h3>
            </div>
        </div>
    )
}

export default MainIcons