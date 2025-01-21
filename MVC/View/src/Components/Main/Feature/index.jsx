import React from 'react'
import './Feature.css'
import { FaCheck } from "react-icons/fa";

function index() {
  return (
    <div>
      <section id='feature'>
        <div className="feat-up">
            <div className="fu-cards">
                <div className="fu-card">
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg" alt="" />
                    <h3>Money Savings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="fu-card">
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg" alt="" />
                    <h3>Online Shoppings</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div className="fu-card">
                    <img src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg" alt="" />
                    <h3>Credit / Debit Cards</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
        </div>
        <div className="feat-low">
            <img src="https://preview.colorlib.com/theme/banker/images/about_2.jpg.webp" alt="" />
            <div className="fl-txt">
                <h3>Amortization Computation</h3>
                <p>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia.</p>
                <ul>
                    <li><FaCheck/> Officia quaerat eaque neque</li>
                    <li><FaCheck/> Lorem ipsum dolor sit amet</li>
                    <li><FaCheck/> Consectetur adipisicing elit</li>
                </ul>
                <div className="fl-inp">
                    <input placeholder='Enter your email' type="email" />
                    <input type="submit" value="Submit Email" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default index
