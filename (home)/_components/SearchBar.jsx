import React from 'react'
import { Search } from 'lucide-react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <Search height={17}/>
            <input type="text" placeholder="Search Course" />
        </div>
    )
}

export default SearchBar
