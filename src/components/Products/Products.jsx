import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get("/json/products.json")
            .then(response => {
                setProducts(response.data.slice(0, 8))
            })
            .catch(error => console.error("Data fetching error", error));
    }, [])



    return (
        <section className='ufc-products-area'>
            <div className="container">
                <div className="ufc-product-content">
                    <h3>Solutions for Your <span>Unique</span> Health Goals</h3>
                    <div className="ufc-product-filter-button">
                        <button className='active'>All</button>
                        <button>Best Selling Products</button>
                        <button>Weight Loss</button>
                        <button>Beauty And Hair Loss</button>
                        <button>Testosterone/HRT</button>
                        <button>Sexual Health</button>
                        <button><BsArrowRight /></button>
                    </div>
                    <div className="all-ufc-product-content">
                        {
                            products.length > 0 ? (products.map((product) => (
                                <div key={product.key} className='single-ufc-product'>
                                    <div className="single-ufc-category-btn">
                                        {
                                            product.category ? (
                                                <div className={`${product.category === "Research use only" ? "research-btn" : "recurring-plan"}`}>
                                                    <button>{product.category}</button>
                                                </div>
                                            ) : (" ")

                                        }
                                    </div>
                                    <div className="single-ufc-product-img-text flex">
                                        <div className="single-ufc-product-img">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="single-ufc-product-text">
                                            <h5>{product.name}</h5>
                                        </div>
                                    </div>
                                    <div className="single-ufc-product-price-cart">
                                        <p>${product.price} / {product.billing}</p>
                                        <a href="#"><img src={product.cart} alt="" /></a>
                                    </div>
                                </div>
                            ))
                            ) : (<p style={{ textAlign: 'center' }}>Loading products...</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;