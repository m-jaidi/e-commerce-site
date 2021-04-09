import React, { Component } from 'react'
import "./Gallery.css";
import MenuItem from '../MenuItem/MenuItem';
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item4 from '../../assets/item4.jpg'
import item5 from '../../assets/item5.jpg'
import { Link } from 'react-router-dom';
import Data from "../../data";



class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            images: [{
                id: 1,
                backImage: item1,
                title: "Ladies"
            },
            {
                id: 2,
                backImage: item2,
                title: "Accessoires"
            },
            {
                id: 3,
                backImage: item3,
                title: "Jacket"
            },
            {
                id: 4,
                backImage: item4,
                title: "Top picks"
            },
            {
                id: 5,
                backImage: item5,
                title: "New arrivals"
            },
            ]
        }
    }

    render() {
        return (
            <div className="Gallery ">
                {this.state.images.map(item => {

                    return (
                        <Link to={`shop/${item.title}`} className="galleryItem" >
                            <MenuItem
                                backImage={item.backImage}
                                title={item.title} />
                        </Link>

                    )




                })

                }
            </div>
        )
    }
}
export default Gallery;