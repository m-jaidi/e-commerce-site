import React from 'react'
import Header from '../Header/Header';
import './HeaderShop.css';


const HeaderShop = ({title}) => {
    return (
        <div className="HeaderShop">
            <Header/>
            <div className="title">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>      
        </div>
    )
}

export default HeaderShop
