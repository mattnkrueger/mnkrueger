import React from 'react';
import IconLink from './IconLink';
import '../assets/css/Navbar.css';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
    const location = useLocation();
    const { theme } = useTheme();
    const currentPath = location.pathname;
    const isDark = theme === 'dark';

    return (
        <nav>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='title'>
                        Matt Krueger
                        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <div style={{ fontSize: '0.5em', marginTop: '-8px', color: 'var(--color-primary)' }}>Computer Engineer</div>
                        </div>
                    </div>
                    <div className='navbar-icon-container'>
                        <IconLink 
                            iconName={isDark ? "homeFilled" : "homeEmpty"} 
                            navItem={["Home", "/"]} 
                            width={24} 
                            height={24}
                            className={`home-icon ${currentPath === "/" ? 'selected' : ''}`}
                        />
                        <div className="separator" style={{ 
                            width: '1px', 
                            height: '24px', 
                            backgroundColor: 'currentColor', 
                            opacity: 0.3 
                        }}></div>
                        <IconLink 
                            iconName={isDark ? "universityFilled" : "universityEmpty"} 
                            navItem={["University", "/university"]} 
                            width={24} 
                            height={24}
                            className={`university-icon ${currentPath === "/university" ? 'selected' : ''}`}
                        />
                        <IconLink 
                            iconName={isDark ? "projectFilled" : "projectEmpty"} 
                            navItem={["Projects", "/projects"]} 
                            width={24} 
                            height={24}
                            className={`project-icon ${currentPath === "/projects" ? 'selected' : ''}`}
                        />
                        <IconLink 
                            iconName={isDark ? "resumeFilled" : "resumeEmpty"} 
                            navItem={["Resume", "/resume"]} 
                            width={24} 
                            height={24}
                            className={`resume-icon ${currentPath === "/resume" ? 'selected' : ''}`}
                        />
                        <IconLink 
                            iconName={isDark ? "phoneFilled" : "phoneEmpty"} 
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