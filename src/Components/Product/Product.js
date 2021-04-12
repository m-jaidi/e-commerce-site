import React from 'react'
import './Product.css'
import {connect} from 'react-redux'
import {reducer} from '../../redux/reducers/Cart_reducer'


const Product = ({ imageUrl, product_name, price, add }) => {  
    


    return (


        <div class=" col-lg-4 col-md-6 product" style={{ position: "relative" }}>
            <img class="img-fluid p-4 " src={imageUrl} alt="" height="250px " />
            <div className="button">
                <button type="button" class="btn btn-primary button-card " onClick={add}>Add to cart </button>
            </div>
            <h6 class="text-center mt-3">{product_name}</h6>
            <div class="text-center">
                <small>{price+" €"}</small>
            </div>
        </div>

    )
}



function mapDispatchToProps(dispatch) {
    return {
        addToCart: ()=>dispatch({type:"ADD"})
    
    }
  }

export default  connect(mapDispatchToProps)(Product); 
