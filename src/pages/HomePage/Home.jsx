import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../assets/css/Markdown.css';
import johnDeereLogo from '../../assets/img/john_deere.png';
import profilePic from '../../assets/img/profile_pic.jpeg';
import iowaHawkeyeLogo from '../../assets/img/iowa_hawkeye.png';

function HomePage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/pages/HomePage/home.md')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        const withoutImageSection = text.replace(/<div style.*?<\/div>/s, '');
        setContent(withoutImageSection);
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setContent('# Content could not be loaded\nPlease check the console for errors.');
      });
  }, []);

  return (
    <div className="markdown-content">
      <h1>About Me</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        margin: '40px 0'
      }}>
        <img 
          src={johnDeereLogo} 
          alt="John Deere" 
          style={{ width: '180px', height: 'auto' }} 
        />
        <img 
          src={profilePic} 
          alt="Profile Picture" 
          style={{ 
            width: '250px', 
            height: 'auto', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' 
          }} 
        />
        <img 
          src={iowaHawkeyeLogo} 
          alt="Iowa Hawkeye" 
          style={{ width: '180px', height: 'auto' }} 
        />
      </div>
      
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default HomePage;
