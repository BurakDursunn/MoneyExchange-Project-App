// Header.js
import React from 'react';

// CSS stilini doğrudan buraya ekledik
const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
};

const imageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
};


const textStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
};


const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={contentStyle}>
                <img
                    src="/images/ALTINSANKUY.png" // Sadece /images ile başlayan yolu kullanın
                    alt="Logo"
                    style={imageStyle}
                />
                <h1 style={textStyle}>ALTINSAN KUYUMCULUK</h1>
            </div>
        </header>
    );
    
};

export default Header;
