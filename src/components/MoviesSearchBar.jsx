import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import "./Movies.css";
const { Search } = Input;

const MoviesSearchBar=(props)=> {
    return (
        <div className="search-bar-section">
            <Search
            className='movie-search-bar'
            placeholder="Enter movie title"
            onSearch={(value)=>props.onSearch(value)}
            enterButton
            />
        </div>
    );
}

export default MoviesSearchBar;