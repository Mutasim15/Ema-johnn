import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart ,handleClearCart ,children}) => {
    // const cart = props.cart;
    // const {cart}=props;
    // console.log(cart)
    let totalPrice=0;
    let quantity=0;
    let totalship =0;
    for(const product of cart){

        if (product.quantity===0){
             product.quantity =1;
        }
        // product.quantity=product.quantity ||1
        totalPrice=totalPrice+product.price*product.quantity;
        totalship =totalship+product.shipping
        quantity=quantity+ product.quantity
       
    }
    const tax= totalPrice*7/100;

   
    // for(const ship of cart)
    // {
       
    //     totalship=totalship+ship.shipping;
    // }
    const grandTotal =totalPrice+ totalship+tax;
    return (
        <div className='cart'>
                 <h4>Order Summary :</h4>
                 <p>Selected Items:{quantity} </p>
                 <p>Total Price:${totalPrice}</p>
                 <p>Total Shipping :${totalship} </p>
                 <p> Tax:${tax.toFixed(2)} </p>
                 <h6> Grand Total:{grandTotal.toFixed(2)} </h6>
                 <button onClick={handleClearCart} className='btn_clear_cart'>
                    Clear Cart
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                   
                 </button>
                 {children}
        </div>
    );
};

export default Cart;