import React from 'react';
import "../styles/header.css";

const Header = () => {
    return (
        <div>
            <header style={{ borderTop: '7px solid #c6daaa' }}>
                <div className="header-inner" style={{ padding: '20px 60px 20px 60px' }}>
                    <div className="top-center">
                        <div class="Header-nav-inner">
                            <a href="/" class="Header-nav-item" data-test="template-nav">Home</a>
                            <a href="/" class="Header-nav-item" data-test="template-nav">About Me</a>
                            <a href="/" class="Header-nav-item" data-test="template-nav">Blog</a>
                            <a href="/" class="Header-nav-item" data-test="template-nav">Contact</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;