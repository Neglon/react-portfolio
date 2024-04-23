import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div classname="portfolio">
            <h1>Portfolio</h1>
            <div classname="portfolioList">
                <PortfolioItem name="Project 1" image={} />
                <PortfolioItem name="Project 2" />
                <PortfolioItem name="Project 3" />
                <PortfolioItem name="Project 4" />
            </div>
        </div>
    );
}

export default Portfolio;