import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios
            .get("/json/products.json")
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch((error) => console.error("Data fetching error", error));
    }, []);

    const productsCategories = [
        "All",
        "Best Selling Products",
        "Weight Loss",
        "Beauty And Hair Loss",
        "Testosterone/HRT",
        "Sexual Health"
    ];

    // Filter products by category
    const filterProducts = (category) => {
        setSelectedCategory(category);
        setCurrentIndex(0); // Reset pagination when filtering

        if (category === "All") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.search === category);
            setFilteredProducts(filtered);
        }
    };

    // Handle Pagination
    const productsPerPage = 8;
    const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + productsPerPage);

    const nextPage = () => {
        if (currentIndex + productsPerPage < filteredProducts.length) {
            setCurrentIndex(currentIndex + productsPerPage);
        }
    };

    const prevPage = () => {
        if (currentIndex - productsPerPage >= 0) {
            setCurrentIndex(currentIndex - productsPerPage);
        }
    };

    return (
        <section className="ufc-products-area">
            <div className="container">
                <div className="ufc-product-content">
                    <h3>
                        Solutions for Your <span>Unique</span> Health Goals
                    </h3>

                    {/* Category Filter */}
                    <div className="ufc-product-filter-button">
                        <div className="ufc-product-filtering-button">
                            <div className="ufc-buttons">
                                {productsCategories.map((category, idx) => (
                                    <button
                                        key={idx}
                                        className={selectedCategory === category ? "active" : ""}
                                        onClick={() => filterProducts(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                                <button><BsArrowRight /></button>
                            </div>
                        </div>
                    </div>

                    {/* Filtered Products */}
                    <div className="all-ufc-product-content">
                        {visibleProducts.length > 0 ? (
                            visibleProducts.map((product) => (
                                <div key={product.id} className="single-ufc-product">
                                    <div className="single-ufc-category-btn">
                                        {product.category && (
                                            <div
                                                className={product.category === "Research use only" ? "research-btn" : "recurring-plan"}
                                            >
                                                <button>{product.category}</button>
                                            </div>
                                        )}
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
                                        <p>
                                            ${product.price} / {product.billing}
                                        </p>
                                        <a href="#">
                                            <img src={product.cart} alt="" />
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: "center" }}>No products found in this category.</p>
                        )}
                    </div>

                    {/* Pagination Arrows */}
                    <div className="pagination-buttons flex">
                        <button className="filter-prev-button" onClick={prevPage} disabled={currentIndex === 0}>
                            <BsArrowLeft />
                        </button>
                        <button className="filter-next-button" onClick={nextPage} disabled={currentIndex + productsPerPage >= filteredProducts.length}>
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
