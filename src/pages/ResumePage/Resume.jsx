import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../assets/css/Markdown.css';
import { DownloadIcon } from '../../assets/svg/svgIcons';

function ResumePage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('./src/pages/ResumePage/resume.md')
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
      {/* Resume header with download link */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.3em',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, border: 'none', paddingBottom: 0 }}>Resume</h1>
        <a 
          href="matt_krueger_2024_resume.pdf" 
          download="Matt_Krueger_Resume.pdf"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--color-primary)',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid var(--color-border)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 108, 255, 0.1)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>Download Resume</span>
          <DownloadIcon width={18} height={18} />
        </a>
      </div>
      
      {/* Markdown content */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ResumePage;
