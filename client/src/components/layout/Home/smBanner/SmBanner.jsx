import React from 'react'
import './smBanner.css'
import { Link } from 'react-router-dom'

function SmBanner() {
    return (
        <div className='smBannerContainer'>
            <section id="sm-banner" className="section-p1">
                <div className="banner-box" id="banner-box1">
                    <h4>Summer Sale Arrive Soon</h4>
                    <h2>Jackets and more</h2>
                    <span>get a huge discount on Summer Clothes</span>
                    <Link to={'/products'}><button className="white">Learn More</button></Link>
                </div>
                <div className="banner-box" id="banner-box2">
                    <h4>Winter Sale Arrive Soon</h4>
                    <h2>Jurseys and more</h2>
                    <span>Get a huge discount on Summer Clothes</span>
                    <Link to={'/products'}><button className="white">Collection</button></Link>
                </div>
            </section>

            <section id="banner3" className="section-p1">
                <div className="banner-box banner31">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner32">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring/Summer 2022</h3>
                </div>
                <div className="banner-box banner33">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trandy Prints</h3>
                </div>
            </section>
        </div>
    )
}

export default SmBanner