import React from 'react';

const Hero = () => {
    return (
        <div style={{backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'}}>
            <div style={{textAlign: 'center'}}>
                <h1>Welcome to Airbnb</h1>
                <p>Book unique places to stay and things to do.</p>
                <button style={{marginTop: '20px', padding: '10px 20px'}}>Get Started</button>
            </div>
        </div>
    );
}

export default Hero;