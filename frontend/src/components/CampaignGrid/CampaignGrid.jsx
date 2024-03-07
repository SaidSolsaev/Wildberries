import React from 'react'
import "./CampaignGrid.css";
import {Link} from "react-router-dom"
import bær from "../../assets/images/bær.jpg"

const CampaignGrid = () => {
    
    return (
        <div className='campaignSection'>
            <div className='grid-image-container'>
                <div className='big-picture'>
                    <Link to="/products">
                        <img src={bær} alt='pic' /> 
                    </Link>
                    
                    <div className='overlay'>
                        <p>Nyplukkede & ferske bær hver dag</p>
                        <button>Se alle produkter</button>
                    </div>
                </div>

                <div className='small-picture top'>
                    <img src={bær} alt='pic' /> 
                    
                    <div className='overlay'>
                        <p>Våre lokasjoner</p>
                        <button>Se stands</button>
                    </div>
                </div>

                <div className='small-picture bottom'>
                    <img src={bær} alt='pic' /> 
                    
                    <div className='overlay'>
                        <p>Hvem er vi?</p>
                        <button>Om Oss</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CampaignGrid