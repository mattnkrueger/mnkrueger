import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../../assets/css/Markdown.css';
import johnDeereLogo from '../../assets/img/john_deere.png';
import profilePic from '../../assets/img/profile_pic.jpeg';
import iowaHawkeyeLogo from '../../assets/img/iowa_hawkeye.png';
import CardLink from '../../components/CardLink';
import universityImage from '../../assets/img/university_card.png';
import projectsImage from '../../assets/img/project_card.png';
import resumeImage from '../../assets/img/resume_card.png';
import contactImage from '../../assets/img/contact_card.png';
import basketballImage from '../../assets/img/basketball.png';
import pokerImage from '../../assets/img/poker.png';
import dogsImage from '../../assets/img/dogs.png';
import hikingImage from '../../assets/img/hiking.png';

function HomePage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('./src/pages/HomePage/home.md')
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
        setContent('# Home content could not be loaded\nPlease check the console for errors.');
      });
  }, []);

  return (
    <div className="markdown-content">
      {/* Home header with download link */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '0.3em',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0, border: 'none', paddingBottom: 0 }}>Home</h1>
      </div>
      
      {/* Welcome description */}
      <p style={{
        fontSize: '1.1em',
        textAlign: 'left',
        margin: '20px 0 30px',
        color: 'var(--color-text)',
        maxWidth: '800px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        lineHeight: '1.6'
      }}>
        Welcome to my personal website where I track my progress as a computer engineer!
      </p>
      
      {/* Profile images section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        margin: '40px 0'
      }}>
        <img 
          src={iowaHawkeyeLogo} 
          alt="Iowa Hawkeye" 
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
          src={johnDeereLogo} 
          alt="John Deere" 
          style={{ width: '180px', height: 'auto' }} 
        />
      </div>
      
      {/* Markdown header for pages section */}
      <div style={{
        margin: '20px 0',
        textAlign: 'left'
      }}>
        <h2 style={{
          fontSize: '2em',
          fontWeight: '600',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '0.3em',
          maxWidth: '800px',
          margin: '0 auto 15px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}>
          Pages
        </h2>
        <p style={{
          fontSize: '1.1em',
          margin: '0 auto 25px',
          maxWidth: '800px',
          color: 'var(--color-text)',
          textAlign: 'left',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          lineHeight: '1.6'
        }}>
          This website contains four pages that are relevant to my career, use either these cards or navbar icons to navigate
        </p>
      </div>
      
      {/* Card Links section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        margin: '40px 0'
      }}>
        <CardLink 
          to="/mnkrueger/university" 
          title="University" 
          description="List of courses taken at the University of Iowa. Contains links to repos."
          imgSrc={universityImage}
          imgAlt="University of Iowa"
          iconType="university"
        />
        <CardLink 
          to="/mnkrueger/projects" 
          title="Projects" 
          description="Personal projects exploring IoT devices."
          imgSrc={projectsImage}
          imgAlt="Projects Showcase"
          iconType="project"
        />
        <CardLink 
          to="/mnkrueger/resume" 
          title="Resume" 
          description="Professional resume and work experiences. Download available."
          imgSrc={resumeImage}
          imgAlt="Resume"
          iconType="resume"
        />
        <CardLink 
          to="/mnkrueger/contact" 
          title="Contact" 
          description="Connect with me!"
          imgSrc={contactImage}
          imgAlt="Contact Information"
          iconType="contact"
        />
      </div>
      
      {/* Markdown content */}
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
      
      {/* Image Grid Section - 2x2 */}
      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, auto)',
        columnGap: '20px',
        rowGap: '10px',
        width: '100%',
        maxWidth: '600px',
        margin: '40px auto'
      }}>
        <img 
          src={hikingImage} 
          alt="Hiking" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
        <img 
          src={dogsImage} 
          alt="Dogs" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
        <img 
          src={pokerImage} 
          alt="Poker" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
        <img 
          src={basketballImage} 
          alt="Basketball" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
      </div>
      
      {/* Closing message */}
      <div style={{
        margin: '40px auto',
        textAlign: 'center',
        width: '100%',
        padding: '20px 0',
        color: 'var(--color-text)'
      }}>
        <h2 style={{
          fontSize: '2em',
          fontWeight: '600',
          textAlign: 'left', 
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto 20px',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '0.3em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
        }}>
          Thank You!
        </h2>
        <p style={{ 
          marginBottom: '10px',
          maxWidth: '800px',
          margin: '0 auto 10px',
          textAlign: 'left',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          lineHeight: '1.6'
        }}>
          I hope you enjoy exploring my webpage - feel free to contact me with any inquiries.
        </p>
        <p style={{ 
          fontStyle: 'italic', 
          textAlign: 'right',
          maxWidth: '800px',
          margin: '0 auto',
          paddingRight: '40px'
        }}>
          -- Matt
        </p>
      </div>
    </div>
  );
}

export default HomePage; 