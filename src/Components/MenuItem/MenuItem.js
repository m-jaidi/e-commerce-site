import React from 'react'
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item4 from '../../assets/item4.jpg'
import item5 from '../../assets/item5.jpg'


import './MenuItem.css';

export const MenuItem = ({backImage,title}) => {
    console.log(backImage); 
    return (

        <div className="MenuItem ">
    
            <div className="item" style={{backgroundImage:`url(${backImage})`,backgroundPosition:"center",backgroundSize:"cover"}}> </div>
           
            <div className="content">
                    <h1>{title}</h1>
                    <a href="">SHOP NOW</a>
            </div>
        </div>
    )
}

export default MenuItem
