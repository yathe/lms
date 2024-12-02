"use client"
import React, { useState } from 'react';
import './CategoryFilter.css'; // Import the CSS file
const CategoryFilter = ({ selectedCategory }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const filterOptions = [
        { id: 1, name: "All", value: "all" },
        { id: 2, name: "NextJs", value: "Next js" },
        { id: 3, name: "Python", value: "Python" },
        { id: 4, name: "Github", value: "Github" },
        { id: 5, name: "Firebase", value: "firebase" }
    ];

    return (
        <div className='category-filter'>
            {filterOptions.map((item, index) => (
                <button
                    key={index}
                    className={`category-button ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => {
                        setActiveIndex(index);
                        selectedCategory(item.value); // Pass selected category to parent
                    }}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}
export default CategoryFilter;

