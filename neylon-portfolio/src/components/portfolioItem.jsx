import React from 'react';

function PortfolioItem({image, name, githubUrl, deployedUrl}) {
    return (
        <div className="portfolioItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
            <div className="portfolioButtons">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="portfolioButton github">Github</a>
                <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="portfolioButton deployed">Live</a>
            </div>
        </div>
    );
}

export default PortfolioItem;