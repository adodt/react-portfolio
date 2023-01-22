import About from '../About';
import Navigation from '../Navigation';
import React, { useState } from 'react';


function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "about":
            return <About></About>
            default:
                return <About></About>
        }
    }

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    );
}



export default Portfolio;