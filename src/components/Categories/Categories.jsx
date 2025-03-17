import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/mdshakil24/ufc-categories/refs/heads/main/categories.json")
            .then(response => {
                setCategories(response.data.slice(0, 6))
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [])

    return (
        <section className='ufc-category-area'>
            <div className="container">
                <div className="ufc-category-search">
                    <div className="ufc-category-search-field">
                        <CiSearch />
                        <input type="search" placeholder='Search by product/treatment' />
                    </div>
                </div>
                <div className="ufc-category-heading">
                    <h3>Shop by <span>Category</span></h3>
                </div>
                <div className="ufc-category-content">
                        {
                            categories.length > 0 ? (
                                categories.map((category) => (
                                    <div key={category.id} className="category-item">
                                        <img src={category.image} alt={category.title} />
                                        <div className="category-overlay">
                                            <h4>{category.title}</h4>
                                        </div>
                                    </div>
                                ))
                            ) : (<p style={{textAlign: 'center'}}>Loading categories...</p>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Categories;