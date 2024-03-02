import React from 'react'
import "./FeaturedCategories.css"
import useFetch from "./../../hooks/useFetch.js"
import {Link} from "react-router-dom"
import pic from "../../assets/images/logo.png"
import bringbær from "../../assets/images/bringebær.jpeg"
import jordbær from "../../assets/images/jordbær.jpeg"
import bjørnebær from "../../assets/images/bjørnebær.jpg"
import epler from "../../assets/images/epler.jpg"
import moreller from "../../assets/images/moreller.jpeg"
import bær from "../../assets/images/bær.jpg"


export default function FeauteredCategories() {
    const {data} = useFetch("/categories?limit=6");
    
    function getIcon(item){
        if (item === "Jordbær"){
            return jordbær
        } else if(item === "Bringebær"){
            return bringbær
        }else if(item === "Bjørnebær"){
            return bjørnebær
        }else if(item === "Epler"){
            return epler
        }else if(item === "Moreller"){
            return moreller
        }else if(item === "Norske Bringebær"){
            return bringbær
        }else{
            return bær;
        }
        
    }

    
    return (
        <section className='categorisSection'>
            <div className="category-slider">
                <div className='category-lists'>
                    {data.map((item, index) => (
                        <div className='category-box' key={index}>
                            <div className='category-box-tile'>
                                <Link to={"/categories/"+item._id}>
                                    <div className='box-image'>
                                        <img src={getIcon(item.name)} alt={item.name}/>
                                    </div>
                                    <div className='title'>
                                        {item.name}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}