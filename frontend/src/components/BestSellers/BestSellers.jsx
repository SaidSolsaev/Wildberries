import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import "./BestSellers.css";
import jordbær from "../../assets/images/jordbær.jpeg"
import {faCartShopping, faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const BestSellers = () => {
    const {data, loading} = useFetch("/product");
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [sliderPage, setSliderPage] = useState(1)



    useEffect(() => {
        let productList = [];
        data.map((itm, index) => {
            if(itm.isFeatured){
                return productList.push(itm)
            } else{
                return
            }
        });
        setFeaturedProducts(productList)
    }, [data])

    function handleSlider(page) {
        if(sliderPage === 3){
            setSliderPage(1)
        } else if(sliderPage < 1){
            setSliderPage(1)
        } else{
            setSliderPage(sliderPage + page)
        }
    }

    // console.log(data)
    // console.log(featuredProducts)

    return (
        <>
        
        {loading ? 
        <div>
            <LoadingSpinner />
        </div> : 
        <div className='bestseller-section'>
            <div className='bestseller-header'>
                <div className='header-text'>
                    <h4>Våre bestselgere</h4>
                </div>
            </div>

            <div className='bestseller-carousel'>
                {featuredProducts.map((product, index) => (
                    <div className='product-card' key={index}>
                        <div className='image-container'>
                            <img src={jordbær} alt={product.title}/>
                        </div>

                        <div className='body-container'>
                            <div className='title'>
                                <Link to={"/product" + product._id}>
                                    {product.title}
                                </Link>
                            </div>
                            
                            <div className='product-info'>
                                <span>{product.price}kr</span>
                                <button><FontAwesomeIcon icon={faCartShopping} /></button>
                            </div>
                        </div>
                    </div>
                ))}
                    
                
            </div>

            <div className='button-link-wrapper'>
                <div className='button-container'>
                    <Link>Se alle bestselgere</Link>
                </div>
                <div className='slide-icons'>
                    <span>{sliderPage} / 3</span>
                    <div className='arrow-icons'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => handleSlider(-1)}/>
                        <FontAwesomeIcon icon={faArrowRight} onClick={() => handleSlider(+1)}/>
                    </div>
                </div>
            </div>
            
        </div>
        }</>
    )
}

export default BestSellers