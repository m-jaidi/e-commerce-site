import React from 'react'
import "./MenuItem.css"
import { Link, withRouter } from "react-router-dom"



export const MenuItem = ({backImage,title,history,match }) => {
    console.log(backImage); 
    return (

        <div  className="MenuItem ">
          
            <div className="item" style={{backgroundImage:`url(${backImage})`,backgroundPosition:"center",backgroundSize:"cover"}}> </div>
                
         <div className="content">
                        <h1>{title}</h1>
                        <a href="">SHOP NOW</a>
                </div>
                
        </div>
    )
}

export default withRouter(MenuItem); 
