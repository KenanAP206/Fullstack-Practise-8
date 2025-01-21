import React from 'react'
import './About.css'
function index() {
  return (
    <div>
      <section id='about'>
        <div className="hadmer">
            <h3>About Us</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</h6>
        </div>
        <div className="about-cont">
                <img src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg.webp" alt="" />
                <div className="ac-txt">
                    <h3>We Solve Your Financial Problem</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
        </div>
      </section>
    </div>
  )
}

export default index
