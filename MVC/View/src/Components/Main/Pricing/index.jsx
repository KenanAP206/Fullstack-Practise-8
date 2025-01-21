import React from 'react'
import './Pricing.css'
import { FaCheck } from "react-icons/fa6";
function index() {
        return (
                <>
                        <section id='pricing'>
                                <div className="hadmer">
                                        <h3>Pricing</h3>

                                </div>

                                <div className="price-cards">
                                        <div className="price-card">
                                                <h4>Basic</h4>
                                                <h3>$47<sub>/year</sub></h3>
                                                <ul>
                                                        <li><FaCheck /> Officia quaerat eaque neque</li>
                                                        <li><FaCheck /> Possimus aut consequuntur incidunt</li>
                                                        <li className='d-li'><FaCheck /> Lorem ipsum dolor sit amet</li>
                                                        <li className='d-li'><FaCheck /> Consectetur adipisicing elit</li>
                                                        <li className='d-li'><FaCheck /> Dolorum esse odio quas architecto sint</li>
                                                </ul>
                                                <button>Buy Now</button>
                                        </div>
                                        <div className="price-card">
                                                <h4>Premium</h4>
                                                <h3>$200<sub>/year</sub></h3>
                                                <ul>
                                                        <li><FaCheck /> Officia quaerat eaque neque</li>
                                                        <li><FaCheck /> Possimus aut consequuntur incidunt</li>
                                                        <li><FaCheck /> Lorem ipsum dolor sit amet</li>
                                                        <li><FaCheck /> Consectetur adipisicing elit</li>
                                                        <li className='d-li'><FaCheck /> Dolorum esse odio quas architecto sint</li>
                                                </ul>
                                                <button>Buy Now</button>
                                        </div>
                                        <div className="price-card">
                                                <h4>Professional</h4>
                                                <h3>$750<sub>/year</sub></h3>
                                                <ul>
                                                        <li><FaCheck /> Officia quaerat eaque neque</li>
                                                        <li><FaCheck /> Possimus aut consequuntur incidunt</li>
                                                        <li><FaCheck /> Lorem ipsum dolor sit amet</li>
                                                        <li><FaCheck /> Consectetur adipisicing elit</li>
                                                        <li><FaCheck /> Dolorum esse odio quas architecto sint</li>
                                                </ul>
                                                <button>Buy Now</button>
                                        </div>
                                </div>
                        </section>
                </>
        )
}

export default index
