import React, {useContext, useState} from 'react'
import './Products.css'
import { FaHeart } from "react-icons/fa";
import { productContext } from '../../../Context/ProductContext';
import { NavLink } from 'react-router';
import { IoIosSearch } from "react-icons/io";
function index() {
    let {products,loading}=useContext(productContext)
    let [search,setSearch]=useState("")
    let [order,setOrder]=useState("asc")
    const filteredProducts= products ?  products
    .filter(product=>(
      product.name.toLowerCase().includes(search.toLowerCase())
    ))
    .sort((a,b)=>{
      if (order === "asc"){
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
    : [];

  return (
    <div>
      <section id='products'>
        <div className="hadmer">
        <h3>Our Products</h3>
        <h6>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h6>
        </div>
        <input
                        type="text"
                        placeholder="Seach..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}
                    />
                    <button
                        onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            margin: '0px 10px',
                            backgroundColor: '#fd7e14',
                            color: 'white'
                        }}
                    >
                        Price: {order === "asc" ? "Ascending" : "Descending"}
                    </button>
       <div className="prod-cards">

       {
            filteredProducts.map((product,index)=>(
                <div className="prod-card">
                <div className="pc-img">
                    <img src={product.image} alt="" />
                    <div className="pc-hover">
                    <FaHeart />
                    <NavLink to={`/${product._id}`}> <IoIosSearch /></NavLink>
                    </div>
                    </div>
                    <h3>{product.name}
                    <p>{product.price}$</p>
                    </h3>
              
                </div>
            ))}

      
       </div>
      </section>
    </div>
  )
}

export default index
