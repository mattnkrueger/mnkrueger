import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UniversityIconFilled, 
  ProjectIconFilled, 
  ResumeIconFilled, 
  PhoneIconFilled 
} from '../assets/svg/svgIcons';
import { useTheme } from '../contexts/ThemeContext';

/**
 * CardLink component that creates a card with an image, description and button link
 * @param {string} to - The path to link to
 * @param {string} title - The title of the card/button
 * @param {string} description - The description text
 * @param {string} imgSrc - Source path for the card image
 * @param {string} imgAlt - Alt text for the image
 * @param {string} iconType - Type of icon to use (university, project, resume, contact)
 * @returns {JSX.Element} Card with image, description and link button
 */
function CardLink({ to, title, description, imgSrc, imgAlt, iconType }) {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Handle navigation with scroll reset
  const handleNavigation = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  // Select the appropriate icon based on iconType
  const getIcon = () => {
    switch (iconType) {
      case 'university':
        return <UniversityIconFilled width={18} height={18} />;
      case 'project':
        return <ProjectIconFilled width={18} height={18} />;
      case 'resume':
        return <ResumeIconFilled width={18} height={18} />;
      case 'contact':
        return <PhoneIconFilled width={18} height={18} />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '180px',
      minWidth: '180px',
      height: '320px',
      borderRadius: '8px',
      overflow: 'hidden',
      flexShrink: 0,
      boxShadow: isDark 
        ? '0 4px 8px rgba(0, 0, 0, 0.4)' 
        : '0 4px 8px rgba(0, 0, 0, 0.2)',
      backgroundColor: isDark 
        ? 'var(--color-background-secondary, #2a2a2a)' 
        : 'var(--color-card-background, white)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = isDark 
        ? '0 6px 12px rgba(0, 0, 0, 0.5)' 
        : '0 6px 12px rgba(0, 0, 0, 0.25)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = isDark 
        ? '0 4px 8px rgba(0, 0, 0, 0.4)' 
        : '0 4px 8px rgba(0, 0, 0, 0.2)';
    }}>
      {/* Top section - Image */}
      <div style={{
        height: '180px',
        overflow: 'hidden',
        backgroundColor: isDark 
          ? 'var(--color-background-tertiary, #333)' 
          : 'var(--color-card-image-bg, #f5f5f5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {imgSrc ? (
          <img 
            src={imgSrc}
            alt={imgAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={{ 
            fontSize: '72px', 
            opacity: isDark ? '0.3' : '0.2', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            color: 'currentColor',
          }}>
            {getIcon()}
          </div>
        )}
      </div>

      {/* Middle section - Description */}
      <div style={{
        padding: '8px',
        height: '80px',
        overflow: 'hidden',
        borderTop: `1px solid ${isDark ? 'var(--color-border-dark, #444)' : 'var(--color-border, #eaeaea)'}`,
        borderBottom: `1px solid ${isDark ? 'var(--color-border-dark, #444)' : 'var(--color-border, #eaeaea)'}`,
        backgroundColor: isDark ? 'var(--color-background-secondary, #2a2a2a)' : 'inherit',
      }}>
        <h3 style={{ 
          fontSize: '15px',
          marginTop: 0, 
          marginBottom: '4px',
          color: isDark ? 'var(--color-text-dark, #e0e0e0)' : 'var(--color-text, #333)',
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '12px',
          margin: 0,
          color: isDark ? 'var(--color-text-secondary-dark, #b0b0b0)' : 'var(--color-text-secondary, #666)',
          lineHeight: '1.3',
          display: '-webkit-box',
          WebkitLineClamp: '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {description}
        </p>
      </div>

      {/* Bottom section - Button with icon */}
      <div style={{
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        backgroundColor: isDark ? 'var(--color-background-secondary, #2a2a2a)' : 'inherit',
      }}>
        <button 
          onClick={handleNavigation}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: isDark ? 'var(--color-primary-dark, #818cf8)' : 'var(--color-primary, #646cff)',
            padding: '8px 0',
            width: '90%',
            height: '40px',
            borderRadius: '4px',
            border: `1px solid ${isDark ? 'var(--color-border-dark, #444)' : 'var(--color-border, #eaeaea)'}`,
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = isDark 
            ? 'rgba(129, 140, 248, 0.1)' 
            : 'rgba(100, 108, 255, 0.1)'
          }
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>Visit {title}</span>
          {getIcon()}
        </button>
      </div>
    </div>
  );
}

export default CardLink; 