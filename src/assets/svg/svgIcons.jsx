import React from 'react';

export const GitHubIcon = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z" />
  </svg>
);
export const HomeIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    {/* Creates an outlined house shape with a door */}
    <path 
      fill="currentColor" 
      d="M22 11v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V1h-2v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v1h3v10h1v1h4v-7h6v7h4v-1h1V12h3v-1zm-3 0h-1v10h-1v-6h-1v-1H8v1H7v6H6V11H5v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v1h1v1h1v1h1v1h1v1h1v1h1z"
    />
  </svg>
);
export const HomeIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    {/* Creates a filled house shape with a door */}
    <path 
      fill="currentColor" 
      d="M23 11v1h-3v10h-1v1h-4v-7H9v7H5v-1H4V12H1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"
    />
  </svg>
);

export const PhoneIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    {/* First path creates the phone receiver shape */}
    <path fill="currentColor" d="M12 10h2v2h-2zm6-1h1v3h-2v-2h-1V9h-1V8h-1V7h-2V5h3v1h1v1h1v1h1z"/>
    {/* Second path creates the main phone body and details */}
    <path fill="currentColor" d="M23 8v4h-2V8h-1V7h-1V6h-1V5h-1V4h-1V3h-4V1h4v1h2v1h1v1h1v1h1v1h1v2zm-1 9v-1h-1v-1h-2v-1h-3v1h-1v1h-3v-1h-1v-1h-1v-1H9v-1H8V9h1V8h1V5H9V3H8V2H7V1H4v1H2v1H1v5h1v4h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h4v1h5v-1h1v-2h1v-3zm-2 3v1h-4v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-2H4V8H3V4h1V3h3v2h1v3H7v1H6v3h1v1h1v1h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v3z"/>
  </svg>
);

export const PhoneIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    {/* First path creates the phone receiver shape */}
    <path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7zm0 3h2v2h-2z"/>
    {/* Second path creates the main phone body and details */}
    <path fill="currentColor" d="M23 8v4h-2V8h-1V7h-1V6h-1V5h-1V4h-1V3h-4V1h4v1h2v1h1v1h1v1h1v1h1v2zm-1 9h1v3h-1v2h-1v1h-5v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2V8H1V3h1V2h2V1h3v1h1v1h1v2h1v3H9v1H8v3h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v1h1z"/>
  </svg>
);

export const MoonIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path 
      fill="currentColor" 
      d="M21 17v1h-2v1h-4v-1h-2v-1h-2v-1h-1v-2H9v-2H8V8h1V6h1V4h1V3h2V2h2V1h-5v1H8v1H6v1H5v1H4v2H3v2H2v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2zM8 20v-1H6v-2H5v-2H4V9h1V7h1V5h2v1H7v2H6v4h1v2h1v2h1v1h1v1h1v1h2v1h2v1h-5v-1z"
    />
  </svg>
);

export const MoonIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M22 17v2h-1v1h-1v1h-2v1h-2v1h-6v-1H8v-1H6v-1H5v-1H4v-2H3v-2H2V9h1V7h1V5h1V4h1V3h2V2h2V1h5v1h-2v1h-2v1h-1v2H9v2H8v4h1v2h1v2h1v1h2v1h2v1h4v-1h2v-1z"/>
  </svg>
);

export const DinosaurIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path 
      fill="currentColor" 
      d="M13 2v1h-1v6h-1v1H9v1H8v1H7v1H5v-1H4v-1H3V9H2v6h1v1h1v1h1v1h1v4h2v-1H7v-1h1v-1h1v-1h1v1h1v3h2v-1h-1v-4h1v-1h1v-1h1v-3h1v1h1v-2h-2V9h5V8h-3V7h5V3h-1V2m-7 1h1v1h-1Z"
    />
  </svg>
);

export const DinosaurIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path 
      fill="currentColor" 
      d="M13 2v1h-1v6h-1v1H9v1H8v1H7v1H5v-1H4v-1H3V9H2v6h1v1h1v1h1v1h1v4h2v-1H7v-1h1v-1h1v-1h1v1h1v3h2v-1h-1v-4h1v-1h1v-1h1v-3h1v1h1v-2h-2V9h5V8h-3V7h5V3h-1V2m-7 1h1v1h-1Z"
    />
  </svg>
);
export const LinkedInIcon = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8zM4 8V5h3v3zm3 1v11H4V9z"/>
  </svg>
);

export const DownloadIcon = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M5 10H4V8h2v1h1v1h1v1h1v1h1V1h2v12h1v-1h1v-1h1v-1h1V9h1V8h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5zM2 21h20v2H2z"/>
  </svg>
);

export const ProjectIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M19 11v-1h1V9h1V8h1V7h1V4h-1V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-1v1h-2V5h-1V4H9V3H8V2H7V1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h1v2H5v1H4v1H3v1H2v1H1v6h6v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2zM7 10V9H6V8H5V7H4V5h1V4h2v1h1v1H7v1h1v1h1V7h1v2H9v1zm6 3v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H3v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1zm6 3v1h1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-2h1v-1h2v1h-1v1h1v1h1v-1zm-2-9V6h-1V5h1V4h1V3h1v1h1v1h1v1h-1v1h-1v1h-1V7z"/>
  </svg>
);

export const ProjectIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M2 7H1V5h1V4h1V3h1V2h1V1h2v1h1v2H7v1H6v1h1v1h1V6h1V5h2v1h-1v1H9v1H8v1H7v1H6v1H5v-1H4V9H3V8H2zm11 10h-1v1h-1v1h-1v1H9v1H8v1H7v1H1v-6h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1zM23 4v3h-1v1h-1v1h-2V8h-1V7h-1V6h-1V5h-1V3h1V2h1V1h3v1h1v1h1v1zm-1 13h1v2h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v2h-1v1h-1v1h1v1h1v-1h1v-1h2z"/>
  </svg>
);

export const ResumeIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M19 5V4h-3V3h-1V2h-1V1h-4v1H9v1H8v1H5v1H4v17h1v1h14v-1h1V5zm-9-2h1V2h2v1h1v2h-1v1h-2V5h-1zM6 6h2v1h8V6h2v15H6z"/>
  </svg>
);

export const ResumeIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M15 3V2h-1V1h-4v1H9v1H8v3h1v1h6V6h1V3zm-4 3V5h-1V3h1V2h2v1h1v2h-1v1z"/>
    <path fill="currentColor" d="M20 5v17h-1v1H5v-1H4V5h1V4h2v3h1v1h8V7h1V4h2v1z"/>
  </svg>
);
export const UniversityIconEmpty = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path 
      fill="currentColor" 
      d="M12 1L1 7v2h1v12h1v1h18v-1h1V9h1V7L12 1zm10 8h-1v11H3V9H2V8.6L12 3l10 5.6V9zM5 9v10h2V9H5zm4 0v10h2V9H9zm4 0v10h2V9h-2zm4 0v10h2V9h-2z"
    />
  </svg>
);

export const UniversityIconFilled = ({ width = 24, height = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className}>
    <path 
      fill="currentColor" 
      d="M12 1L1 7v2h1v12h1v1h18v-1h1V9h1V7L12 1zM7 9v10H5V9h2zm4 0v10H9V9h2zm4 0v10h-2V9h2zm4 0v10h-2V9h2z"
    />
  </svg>
);