import React from 'react';
import IconLink from './IconLink';
import '../assets/css/Footer.css'
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    // Handle theme toggle without navigating
    const handleThemeToggle = (e) => {
        e.preventDefault();
        toggleTheme();
    };

    return (
        <nav className="footer">
            <div className='footer-container'>
                <div>
                    <IconLink 
                        iconName="github" 
                        navItem={["GitHub", "https://github.com/mattnkrueger/"]} 
                        width={24} 
                        height={24} 
                    />
                </div>
                <div className="separator" style={{ 
                    width: '1px', 
                    height: '24px', 
                    backgroundColor: 'currentColor', 
                    opacity: 0.3 
                }}></div>
                <div>
                    <IconLink 
                        iconName="linkedIn" 
                        navItem={["LinkedIn", "https://linkedin.com/in/mattnkrueger/"]}
                        width={24} 
                        height={24} 
                    />
                </div>
                <div className="separator" style={{ 
                    width: '1px', 
                    height: '24px', 
                    backgroundColor: 'currentColor', 
                    opacity: 0.3 
                }}></div>
                <div>
                    <IconLink 
                        iconName={isDark ? "moonFilled" : "moonEmpty"} 
                        navItem={["Theme", "#"]} 
                        width={24} 
                        height={24}
                        className={`moon-icon ${isDark ? 'selected' : ''}`}
                        onClick={handleThemeToggle}
                    />
                </div>
                <div className="separator" style={{ 
                    width: '1px', 
                    height: '24px', 
                    backgroundColor: 'currentColor', 
                    opacity: 0.3 
                }}></div>
                <div className='footer-text'>
                    Matt Krueger 2025
                </div>
            </div>
        </nav>
    )
}

export default Footer;