import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Gallery from '../../Components/Gallery/Gallery';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Slider/>
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home
