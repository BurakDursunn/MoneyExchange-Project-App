import React from 'react';

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
    borderRadius: '10%',
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
                    src="/images/ALTINSANKUY.png" 
                    alt="Logo"
                    style={imageStyle}
                />
                <h1 style={textStyle}>ALTINSAN KUYUMCULUK</h1>
            </div>
        </header>
    );
    
};

export default Header;
