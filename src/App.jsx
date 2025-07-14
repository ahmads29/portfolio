import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Skills from './components/Skills';
import ProjectsHomeSection from './components/ProjectsHomeSection';
import ProjectsPage from './components/ProjectsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
// import cAnimation from './components/cAnimation';
import CircleAnimation from './components/CircleAnimation';


function Home() {
  return (
    <>
      <Landing />
      <CircleAnimation />
      <Skills />
      <ProjectsHomeSection />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <>
        <BottomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer /> {/* Move Footer outside Routes */}
      </>
    </BrowserRouter>
  );
}

export default App;
