// Footer.js
import React from 'react';

const footerStyle = {
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center',
    padding: '15px 0',
    width: '100%',
    position: 'relative', // Sabit değil, en alta konumlanacak
    fontSize: '0.9rem',
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Burak Dursun | All rights reserved. | Fiyatlar bilgi içindir.</p>
        </footer>
    );
};

export default Footer;
