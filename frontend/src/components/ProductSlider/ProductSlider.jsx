import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import jordbær from "../../assets/images/jordbær.jpeg"
import {faCartShopping, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {useCart} from "../../context/CartContext"

const ProductSlider = ({title, url}) => {
    const {data, loading} = useFetch(`/${url}`);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [sliderPage, setSliderPage] = useState(1)



    useEffect(() => {
        setFeaturedProducts(data);
    }, [data])

    console.log(featuredProducts)

    function handleSlider(change) {
        setSliderPage((prevPage) => {
            let newPage = prevPage + change;
            const totalPages = Math.ceil(featuredProducts.length / 4);
            if (newPage > totalPages) {
                newPage = 1;
            } else if (newPage < 1) {
                newPage = totalPages;
            }
            return newPage;
        });
    }

    const startIndex = (sliderPage - 1) * 4;
    const endIndex = startIndex + 4;
    const productsToShow = featuredProducts.slice(startIndex, endIndex);
    
    const { dispatch} = useCart();
    
    const addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    
    return (
        <>
        
            {loading ? 
                <LoadingSpinner />
            :

            <div className='bestseller-section'>
                <div className='bestseller-header'>
                    <div className='header-text'>
                        <h4>{title}</h4>
                    </div>
                </div>

                <div className='bestseller-carousel'>
                    <div className='bestseller-carousel-inner' style={{transform: `translateX(-${(sliderPage - 1) * 150}%)`}}>
                        {productsToShow.map((product, index) => (
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
                        
                    </div>
                    
                </div>

                <div className='button-link-wrapper'>
                    <div className='button-container'>
                        <Link>Se alle produkter</Link>
                    </div>
                    <div className='slide-icons'>
                        <span>{sliderPage} / 2</span>
                        <div className='arrow-icons'>
                            <FontAwesomeIcon icon={faArrowLeft} onClick={() => handleSlider(-1)}/>
                            <FontAwesomeIcon icon={faArrowRight} onClick={() => handleSlider(+1)}/>
                        </div>
                    </div>
                </div>
                
            </div>
        }
        </>
    )
}

export default ProductSlider