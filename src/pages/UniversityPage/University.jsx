import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../assets/css/Markdown.css';
import universityEmblem from '../../assets/img/university_emblem.png';

function UniversityPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/pages/UniversityPage/university.md')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setContent('# Content could not be loaded\nPlease check the console for errors.');
      });
  }, []);

  return (
    <div className="markdown-content">
      {/* University header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.3em',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, border: 'none', paddingBottom: 0 }}>University</h1>
      </div>
      
      {/* University emblem section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px 0'
      }}>
        <div style={{
          position: 'relative',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.1px'
        }}>
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
          }}>
            <img 
              src={universityEmblem} 
              alt="University of Iowa" 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      </div>
      
      {/* Markdown content */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default UniversityPage;
