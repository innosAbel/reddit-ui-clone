import React from 'react';

import './Searchbar.css';

import SearchIcon from '@material-ui/icons/Search';

export default function Searchbar(){
    return (
        <div className="searchbar">
            <label htmlFor="searchbar">
                <SearchIcon />
            </label>
            <input type="text" id="searchbar" placeholder="Search" />
        </div>
    );
}