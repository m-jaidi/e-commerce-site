import React, { useState } from 'react'
import Product from '../Product/Product'
import './ListProducts.css'
import {connect} from 'react-redux'


const ListProducts = ({ products,dispatch }) => {

    const addItem = (item) => {
         dispatch({
             type:"ADD",
             data:item
         })
    }
    return (
        <div className="ListProducts">
            <div class="container">

                <div class="row mx-auto">
                    
                    {
                        products.map(item => {
                            return (
                                
                                <Product
                                    imageUrl={item.imageUrl}
                                    product_name={item.name}
                                    price={item.price}
                                    add = { () => addItem(item)}
                                    />
                                
                               
                                )
                            

                        })




                    }
                </div>
            </div>

        </div>

    )
}

function mapStateToProps(state) {

    return {
        cartItems: state.cartItems
    }
  }
export default connect(mapStateToProps)(ListProducts)
