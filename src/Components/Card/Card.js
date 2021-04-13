import React from 'react'
import './Card.css'

const Card = ({ items }) => {
    return (
        <div className="Card">

            {
                items.map(item => {
                    return (

                        <div className="product_card">
                            <div className="image_product"><img src={item.imageUrl}></img></div>
                            <div className="product_information">
                                <div className="product_name">Name: {item.name}</div>
                                <div className="product_price">Price: {item.quantity * item.price} </div>
                            </div>
                        </div>

                    )

                })


            }





            <button type="button" className="btn btn-primary" id="btn-check">Checkout</button>
        </div>
    )
}




export default Card
