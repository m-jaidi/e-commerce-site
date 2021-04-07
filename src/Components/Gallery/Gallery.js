import React, { Component } from 'react'
import "./Gallery.css"; 
import MenuItem from '../MenuItem/MenuItem';
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item4 from '../../assets/item4.jpg'
import item5 from '../../assets/item5.jpg'



class Gallery extends Component {

constructor(props){
        super(props); 
        this.state={

            images:[{
                backImage:item1,
                title:"Ladies"
            },
            {
                backImage:item2,
                title:"Accessoires"
            },
            {
                backImage:item3,
                title:"Jacket"
            },
            {
                backImage:item4,
                title:"Top picks"
            },
            {
                backImage:item5,
                title:"New arrivals"
            },
        ]
        }
}

    render() {
        console.log(item1)
        return (
            <div className="Gallery ">
                  {this.state.images.map(item =>{
                       return <MenuItem
                       backImage={item.backImage}
                       title={item.title}              
                       />
                  })}
            </div>
        )
    }
}
export default Gallery;