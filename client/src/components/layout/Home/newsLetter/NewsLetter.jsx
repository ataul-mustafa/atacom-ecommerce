import React from 'react';
import './NewsLetter.css'

function NewsLetter() {
  return (
    <section id="newsletter">
        <div class="newstext">
            <h4>Sign Up for Newsletters</h4>
            <p>Get E-mail updates about out latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Enter your email" />
            <button>Sign Up</button>
        </div>
    </section>
  )
}

export default NewsLetter