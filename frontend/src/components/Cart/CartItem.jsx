import React from 'react'
import { useCart } from '../../context/CartContext';
import pic from "../../assets/images/jordbær.jpeg";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartItem({item}) {
    const {dispatch} = useCart();

    const removeFromCart = (itemId) => {
        dispatch({type: "REMOVE_FROM_CART", payload: itemId})
    }

    const increaseItem = (itemId) => {
        dispatch({type: "ADD_QUANTITY", payload: itemId})

    }

    const decreaseItem = (itemId) => {
        dispatch({type: "REDUCE_QUANTITY", payload: itemId})
    }
    
    
    return (
        <div className='cart_item_info'>
            <div className='cart_product_info'>
                <div style={{display: "flex", alignItems: "center"}}>

                    <img alt='product' src={pic}/>
                </div>

                <div className='cart_product_info_col'>
                    <h4>{item.product.title}</h4>
                    <p>
                        {item.quantity}x
                        <span>{(item.product.price * item.quantity).toFixed(2)}Kr</span>
                    </p>

                    <div className="cart_product_increase">
                        <span className='deacrese' onClick={() => decreaseItem(item.product._id)}>-</span>
                        <span className='qnty'>{item.quantity}</span>
                        <span className='increase' onClick={() => increaseItem(item.product._id)}>+</span>
                    </div>
                </div>

                <span className='cart_delete_btn' onClick={() => removeFromCart(item.product._id)}>
                    <i><FontAwesomeIcon icon={faXmark} /></i>
                </span>
            </div>

        </div>
    )
}