import React from 'react';
import IconLink from './IconLink';
import '../assets/css/Navbar.css';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const currentPath = location.pathname;

    return (
        <nav>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='title'>
                        Matt Krueger
                    </div>
                    <div className='navbar-icon-container'>
                        <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                            <IconLink 
                                iconName={theme === 'dark' ? "moonFilled" : "moonEmpty"} 
                                navItem={["Theme", "#"]} 
                                width={24} 
                                height={24}
                                className={`moon-icon ${theme === 'dark' ? 'selected' : ''}`}
                                onClick={(e) => e.preventDefault()}
                            />
                        </div>
                        <IconLink 
                            iconName={currentPath === "/" ? "homeFilled" : "homeEmpty"} 
                            navItem={["Home", "/"]} 
                            width={24} 
                            height={24}
                            className={`home-icon ${currentPath === "/" ? 'selected' : ''}`}
                        />
                        <IconLink 
                            iconName={currentPath === "/projects" ? "dinosaurFilled" : "dinosaurEmpty"} 
                            navItem={["Projects", "/projects"]} 
                            width={24} 
                            height={24}
                            className={`dinosaur-icon ${currentPath === "/projects" ? 'selected' : ''}`}
                        />
                        <IconLink 
                            iconName={currentPath === "/contact" ? "phoneFilled" : "phoneEmpty"} 
                            navItem={["Contact", "/contact"]} 
                            width={24} 
                            height={24}
                            className={`phone-icon ${currentPath === "/contact" ? 'selected' : ''}`}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;