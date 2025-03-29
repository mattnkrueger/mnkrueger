import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import ProjectsPage from './pages/ProjectsPage/Projects';
import ContactPage from './pages/ContactPage/Contact';
import UniversityPage from './pages/UniversityPage/University';
import ResumePage from './pages/ResumePage/Resume';

function App() {
  return (
    <div style={{ 
      backgroundColor: 'var(--color-background)', 
      color: 'var(--color-text)',
      minHeight: '100vh'
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/university" element={<UniversityPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;