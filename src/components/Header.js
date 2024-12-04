import '../css/Header.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="header-title">
                3D-S
            </div>
            <div className="header-nav">
                <Link className="header-link" to="/">Inicio</Link>
                <Link className="header-link" to="/results">Resultados</Link>
                <Link className="header-link" to="/manual">Manual</Link>
            </div>
        </div>
    )
};

export default Header;