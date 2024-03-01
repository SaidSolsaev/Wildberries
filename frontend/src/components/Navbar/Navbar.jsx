import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";
import {faBars, faXmark, faArrowRightFromBracket, faUser, faCartShopping, faLocationDot, faStore} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import logo from "../../assets/images/logo1.jpg"

export default function Navbar() {
    const [showHamburger, setShowHamburger] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const {user, dispatch} = useContext(AuthContext);
    

    const cart = useCart();
    var cartItems = cart.cartState.cartItems;
    

    const handleShowCart = () => {
        setShowCart(!showCart);
    }

    
    const handleLogout = e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        window.location.reload();
    }


    const handleShowHam = () => {
        setShowHamburger(!showHamburger);
    }

    return (
        <>
            <nav className='navbar-container'>
                <div className='nav-elements'>
                    <ul className={showHamburger ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <NavLink to="/">Hjem</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="">
                                Produkter
                                <span><FontAwesomeIcon icon={faStore} /></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Våre stands
                                <span><FontAwesomeIcon icon={faLocationDot} /></span>
                            </NavLink>
                        </li>

                        <li className='menu-profile'>
                            {user ? 
                                <button className="logoutbtn" onClick={handleLogout}>
                                    Log Out <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                                </button>
                                :
                                <NavLink to="/login" style={{color: "#df2020"}}>Login</NavLink>
                            }
                        </li>
                    </ul>
                </div>

                <div className='logo'>
                    <img style={{width: "80px"}} src={logo} alt='wildberries'/>
                </div>


                <div className='nav-elements'>
                    <ul className="nav-menu">
                        
                        
                        <li>
                            <NavLink to="/contact">Kontakt oss</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Om oss</NavLink>
                        </li>
                        
                        {user ? (
                            <div className='dropdown'>
                                <h3 style={{color: "black"}}>{user.username}</h3>
                                <span><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        ): (
                            <li className='login'>
                                <Link to="/login">
                                    Logg inn 
                                    <span><FontAwesomeIcon icon={faUser} /></span>
                                </Link>
                            </li>
                        )}
                        
                        <li>
                            <span className='cart' onClick={handleShowCart}>
                                Kurv
                                <i><FontAwesomeIcon icon={faCartShopping} /></i>
                                <span className={user ? 'cart_badge' : 'cart_badge user'}>{cartItems.length}</span>
                            </span>
                        </li>
                    </ul>
                </div>
                

                <div className='menu-icons'>
                    {showHamburger ? 
                        <i onClick={handleShowHam}><FontAwesomeIcon icon={faXmark} color='black'/></i>
                        :
                        <i onClick={handleShowHam}><FontAwesomeIcon icon={faBars} color='black'/></i>
                    }
                </div>

                
            </nav>

            {showCart && <Cart setShowCart={setShowCart}/>}
            
        </>
    )
}