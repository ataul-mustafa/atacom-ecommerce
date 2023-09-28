import React from 'react'
import './DiscBanner.css'
import { Link } from 'react-router-dom';

function DiscBanner() {
  return (
    <section id="banner" class="section-m1">
        <h4>Sale Sale Sale</h4>
        <h2>Up to <span>70% off</span> &mdash; All Fashion Products</h2>
        <Link to={'/products'}><button class="normal">Explore More</button></Link>
    </section>
  )
}

export default DiscBanner;