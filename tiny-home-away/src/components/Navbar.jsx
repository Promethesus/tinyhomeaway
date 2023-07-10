import React from 'react';

const Navbar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px 50px', background: '#333', color: '#fff'}}>
            <div>
                <h2 style={{margin: 0}}>Tiny Home Away</h2>
            </div>
            <div>
                <a href="/" style={{color: '#fff', margin: '0 10px'}}>Home</a>
                <a href="/about" style={{color: '#fff', margin: '0 10px'}}>About</a>
                <a href="/contact" style={{color: '#fff', margin: '0 10px'}}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;