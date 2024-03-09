import React, {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import jordbær from "../../assets/images/jordbær.jpeg"
import {faCartShopping, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {useCart} from "../../context/CartContext"

const CarouselComponent = ({title, products}) => {
    
    const { dispatch} = useCart();

    const addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

   
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
          slidesToSlide: 4,
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 800, min: 510 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 510, min: 0 },
          items: 1,
        },
      };


    return (
        <div className='carousel-section'>
                <div className='carousel-header'>
                    <div className='header-text'>
                        <h4>{title}</h4>
                    </div>
                </div>

                <Carousel responsive={responsive}>
                    {products.map((product, index) => (
                        <div className='product-card' key={index}>
                            <div className='image-container'>
                                <Link to={"/product/" + product._id}>
                                    <img src={jordbær} alt={product.title}/>
                                </Link>
                            </div>

                            <div className='body-container'>
                                <div className='title'>
                                    <Link to={"/product/" + product._id}>
                                        {product.title}
                                    </Link>
                                </div>
                                
                                <div className='product-info'>
                                    <span>{product.price}kr</span>
                                    <button onClick={() => addToCart({product})}><FontAwesomeIcon icon={faCartShopping} /></button>
                                </div>
                            </div>
                        </div>
                    ))}       
                </Carousel>
                

                <div className='button-link-wrapper'>
                    <div className='button-container'>
                        <Link>Se alle produkter</Link>
                    </div>
                </div>
                
            </div>
    )
}

export default CarouselComponent