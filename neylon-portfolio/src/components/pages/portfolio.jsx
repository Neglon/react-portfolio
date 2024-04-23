import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import { PortfolioList } from '../helpers/portfolioList';
import "../../index.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolioList">
               {PortfolioList.map((item) => {
                return <PortfolioItem name={item.name} image={item.image}  />;
                })}
            </div>
        </div>
    );
}

export default Portfolio;