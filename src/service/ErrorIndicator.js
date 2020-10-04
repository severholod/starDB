import React from 'react';
import icon from './death-star.png'

export const ErrorIndicator = () => {
    return (
        <div className="random-planet jumbotron rounded">
            <div className="error-indicator">
                <img src={icon} alt="error-icon"/>
                <span className="boom">NOOOOOO!</span>
                <span>something has gone terribly wrong</span>
                <span>(but we have already sent droids to fix it)</span>
            </div>
        </div>
    )
}