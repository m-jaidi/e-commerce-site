import React, {useState} from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../Card/Card'
import Button from '@material-ui/core/Button';




const Header = (props) => {
   const [show, setShow]= useState(false); 
    let sommeProducts = 0; 
    props.cartItems.forEach( item => {
        sommeProducts += item.quantity ; 
    })
    const toggle = () => {

       setShow(!show); 
       console.log(show)

    }

    return (
        <div className="Header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <Link to="/"><a class="navbar-brand" >SELL. </a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul class=" navbar-nav me-auto mb-2 mb-lg-0 mx-auto fs-5" style={{ color: "gray" }}>
                            <li class="nav-item mx-3">
                                
                            <Link to="/"> <a class="nav-link " aria-current="page" href="#">HOME</a></Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to="">SHOP</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="singleproduct.html">CONTACT</a>
                            </li>

                        </ul>
                        <div class="mx-3">                            
                                <SearchIcon style={{ margin: "10px" }} />                            
                                <AccountCircleIcon style={{ margin: "10px" }} />  
                                <Button  onClick={toggle}>
                                <ShoppingCartIcon className="cartIcon" />
                                </Button> 
                                <span id="cart">{sommeProducts}</span> 
                        </div>

                    </div>


                </div>
                 
                    {
                        show ? <Card className="card" items={props.cartItems} /> : null
                    }
                

            </nav>


            {/* Slider */}



        </div>
    )

}

function mapStateToProps(state) {

    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Header)

