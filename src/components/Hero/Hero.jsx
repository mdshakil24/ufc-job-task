import React from 'react';

const Hero = () => {
    return (
        <section className='ufc-hero-area'>
            <div className="container">
                <div className="ufc-hero-content">
                    <div className="ufc-hero-left-text-content">
                        <h1>Prescription treatments for your <span>health goals</span></h1>
                        <a className='gradient-border-button' href="#">Find my treatment</a>
                    </div>
                    <div className="ufc-hero-right-image-content">
                        <img src="/hero/players-mobile.png" alt="PlayersImage" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;