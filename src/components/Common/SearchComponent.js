
import React from 'react';

const SearchComponent = ({ placeholder }) => {
    return (
        <div className="search-component">
            <input type="text" placeholder={placeholder} />
            <button>Search</button>
        </div>
    );
};

export default SearchComponent;
