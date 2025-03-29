import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import ProjectsPage from './pages/ProjectsPage/Projects';
import ContactPage from './pages/ContactPage/Contact';
import UniversityPage from './pages/UniversityPage/University';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/university" element={<UniversityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
