import React from 'react'
import "./FeaturedCategories.css"
import useFetch from "./../../hooks/useFetch.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faBurger, faSeedling, faCakeCandles, faFishFins, faBowlFood, faBowlRice} from '@fortawesome/free-solid-svg-icons';

export default function FeauteredCategories() {
    const {data} = useFetch("/categories");
    
    function getIcon(item){
        if (item === "Pizza"){
            return <FontAwesomeIcon icon={faPizzaSlice} />

        } else if(item === "Sushi"){
            return <FontAwesomeIcon icon={faFishFins} />
        }else if(item === "Burgers"){
            return <FontAwesomeIcon icon={faBurger} />
        }else if(item === "Vegetarian"){
            return <FontAwesomeIcon icon={faSeedling} />
        }else if(item === "Desserts"){
            return <FontAwesomeIcon icon={faCakeCandles} />
        }else if(item === "Thai"){
            return <FontAwesomeIcon icon={faBowlRice} />
        }else{
            return <FontAwesomeIcon icon={faBowlFood} />
        }
        
    }

    console.log(data)
    
    return (
        <section className='categorisSection'>
            <div className="container" >
                <div className="row">
                    {data?.map((item) => (

                        <div className="category-col" key={item._id}>
                            <div className='category'>
                                <span className='icon'>{getIcon(item.name)}</span>
                                <h3 className='title' style={{fontSize: "22px"}}>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    )
}