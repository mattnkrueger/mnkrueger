import React from 'react'
import { 
  GitHubIcon, 
  HomeIconEmpty, 
  HomeIconFilled, 
  PhoneIconEmpty, 
  PhoneIconFilled,
  MoonIconEmpty,
  MoonIconFilled,
  DinosaurIconEmpty,
  DinosaurIconFilled,
  LinkedInIcon
} from '../assets/svg/svgIcons'

/**
 * IconLink component that wraps an icon in a hyperlink
 * @param {string} iconName - The name of the icon to display
 * @param {Array} navItem - Navigation item in format ["name", "path"]
 * @param {object} iconProps - Props to pass to the icon (width, height, className)
 * @returns {JSX.Element} The icon wrapped in a link
 */
const IconLink = ({ iconName, navItem, ...iconProps }) => {
  // Extract the path from the navigation item
  const path = navItem[1];
  
  // Map icon names to their components
  const iconComponents = {
    'github': GitHubIcon,
    'homeEmpty': HomeIconEmpty,
    'homeFilled': HomeIconFilled,
    'phoneEmpty': PhoneIconEmpty,
    'phoneFilled': PhoneIconFilled,
    'moonEmpty': MoonIconEmpty,
    'moonFilled': MoonIconFilled,
    'dinosaurEmpty': DinosaurIconEmpty,
    'dinosaurFilled': DinosaurIconFilled,
    'linkedIn': LinkedInIcon
  };
  
  // Get the requested icon component
  const IconComponent = iconComponents[iconName];
  
  // If icon not found, return null or a fallback
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }
  
  // Only use target="_blank" for external links (GitHub and LinkedIn)
  const isExternalLink = ['github', 'linkedIn'].includes(iconName);
  
  return (
    <a 
      href={path} 
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <IconComponent {...iconProps} />
    </a>
  );
};

export default IconLink;