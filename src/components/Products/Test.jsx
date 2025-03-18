import React, { useState } from "react";

const products = [
  { id: 1, name: "Retaratide", category: "Best Selling Products", price: "$39.99", tag: "Research use only" },
  { id: 2, name: "Lyophilized Glow", category: "Beauty And Hair Loss", price: "$39.99", tag: "Research use only" },
  { id: 3, name: "Compounded Sermorelin", category: "Testosterone/HRT", price: "$179 Monthly", tag: "Recurring Plan" },
  { id: 4, name: "2X CJC / Ipamorelin", category: "Weight Loss", price: "$149 Monthly", tag: "" },
  { id: 5, name: "Lyophilized Oxytocin", category: "Best Selling Products", price: "$39.99", tag: "" },
  { id: 6, name: "Lyophilized Finasteride", category: "Beauty And Hair Loss", price: "$39.99", tag: "Recurring Plan" },
  { id: 7, name: "Compounded NAD+ 1000 mg", category: "Testosterone/HRT", price: "$179 Monthly", tag: "Recurring Plan" },
  { id: 8, name: "Lyophilized PT-141", category: "Sexual Health", price: "$149 Monthly", tag: "Recurring Plan" },
];

const categories = ["All", "Best Selling Products", "Weight Loss", "Beauty And Hair Loss", "Testosterone/HRT", "Sexual Health"];

const ProductFilterSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on category
  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-white text-2xl font-bold text-center">Solutions For Your <span className="text-yellow-400">Unique</span> Health Goals</h2>
      
      {/* Filters */}
      <div className="flex justify-center gap-3 my-5 flex-wrap">
        {categories.map((category) => (
          <button 
            key={category} 
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Slider */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-5">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-900 text-white p-5 rounded-lg min-w-[250px]">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="text-yellow-400">{product.price}</p>
            {product.tag && <span className="text-xs bg-red-500 px-2 py-1 rounded">{product.tag}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterSlider;
