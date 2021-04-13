import React from 'react';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <div className="Slider">
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner  ">
                    <div class="carousel-item active">
                        <img src={slider2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-xl-block d-lg-block  d-md-block">
                        <h5 className="mb-5 display-2 font-weight-bold text-serif">Our Best Seller</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5"></p>
                            <p> <Link to="/shop/Our Best Seller"><a class="btn btn-light" >View collection</a></Link></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-lg-block d-md-block">
                        <h5 className="mb-5 display-2 font-weight-bold text-serif">OUR BEST SELLER</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5">Skinny Jeans</p>
                            <p> <a class="btn btn-light" >View collection</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-lg-block d-md-block">
                        <h5 className="mb-5 display-2 font-weight-bold text-serif">SKELETON TEES</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5"></p>
                            <p> <a class="btn btn-light" >View collection</a></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    )
}

export default Slider
