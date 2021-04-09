import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'



const Header = () => {
    return (
        <div className="Header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" >SELL. </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul class=" navbar-nav me-auto mb-2 mb-lg-0 mx-auto fs-5" style={{ color: "gray" }}>
                            <li class="nav-item mx-3">
                                <a class="nav-link " aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link" to="/shop">SHOP</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="singleproduct.html">CONTACT</a>
                            </li>

                        </ul>
                        <div class="mx-3">

                            <a href="#">
                                <SearchIcon style={{ margin: "10px" }} /></a>
                            <a href="#" >
                                <AccountCircleIcon style={{ margin: "10px" }} /></a>
                            <a href="#" >
                                <ShoppingCartIcon style={{ margin: "10px" }} /></a>
                        </div>

                    </div>

                </div>

            </nav>


            {/* Slider */}
           


        </div>
    )
}

export default Header
