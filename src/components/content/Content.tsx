import React from 'react';

import './Content.css';
import MainBar from './mainbar/MainBar';
import SideBar from './sidebar/SideBar';
import TrendingToday from './trending-today/TrendingToday';

export default function Content(){
    return(
        <div className="content">
            <TrendingToday />
            <div className="bar-wrapper">
            <span className="popular-posts-title">Popular posts</span>
                <div className="bar-wrapper-inside">
                    <MainBar />
                    <SideBar />
                </div>

            </div>
        </div>
    );
}