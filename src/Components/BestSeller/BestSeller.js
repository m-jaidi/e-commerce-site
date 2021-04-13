import React, {useState, useEffect} from 'react'
import HeaderShop from '../../Components/HeaderShop/HeaderShop'
import SidebarShop from '../../Components/SidebarShop/SidebarShop';
import Footer from '../../Components/Footer/Footer';

import { withRouter } from "react-router-dom";
import ListProducts from '../../Components/ListProducts/ListProducts';
import './Shop.css'
import Data from "../../data"; 


const BestSeller = (props) => {
  const [data, setData] = useState(Data.data); 
   const [products, setProducts] = useState([]); 
  
    const getData = ( ) =>  {
       const dataFilterd=  data.filter( item => item.title === "BestSeller")
       setProducts(dataFilterd[0].items); 
       
    }
   
    useEffect(getData, []); 
    return (
        <div className="Shop">

            <HeaderShop  title="Our Best Seller" />
            <div className="main">
                <SidebarShop />
                <ListProducts products={products} />
            </div>
            <div className="mt-5">
                <Footer />
            </div>

        </div>
    )
}

export default withRouter(BestSeller);
