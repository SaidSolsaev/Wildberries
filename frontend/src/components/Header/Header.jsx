import React from 'react'
import "./Header.css";
import { faCar, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    
    return (
        <section className='headerSection' id='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='content'>
                            <h1>
                                <span>SØTE & SAFTIGE</span>
                                <br />Norske bær<br />
                                <span>SJEKK UT MER</span>
                            </h1>
                            <p>Vi selger norske bær: Jordbær, bringebær, moreller</p>
                            
                            <div className="col-btns">
                                <button className="orderBtn">Bestill Nå</button>
                                <button className="allFoodsBtn">Se lokasjoner</button>
                            </div>

                            <div className="service">
                                <p>
                                    <span><FontAwesomeIcon icon={faCar} /></span>
                                    Vi leverer på døra
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>
                                    Betal med kort
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}