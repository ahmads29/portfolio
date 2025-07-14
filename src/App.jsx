import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
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

function ScrollBlob() {
  const { scrollY } = useScroll();
  // Animate position and shape based on scroll
  const top = useTransform(scrollY, [0, 400], [60, 180]);
  const left = useTransform(scrollY, [0, 400], ["70vw", "60vw"]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.18]);
  const borderRadius = useTransform(scrollY, [0, 400], ["40% 60% 60% 40% / 60% 40% 60% 40%", "60% 40% 40% 60% / 40% 60% 40% 60%"]);
  return (
    <motion.div
      style={{
        position: 'fixed',
        top,
        left,
        width: 180,
        height: 180,
        zIndex: 1000,
        scale,
        borderRadius,
        background: 'linear-gradient(135deg, #6a82fb 0%, #ff7eb3 100%)',
        filter: 'blur(32px)',
        opacity: 0.32,
        pointerEvents: 'none',
        transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
        boxShadow: '0 8px 32px 0 #6a82fb33',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.32 }}
    />
  );
}

function ParallaxCircles() {
  const { scrollY } = useScroll();
  // Parallax for each circle
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);
  const x1 = useTransform(scrollY, [0, 800], [0, 60]);
  const x2 = useTransform(scrollY, [0, 800], [0, -40]);
  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: '12vh',
          left: '8vw',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #1b377e 60%, #ffffff 100%)',
          filter: 'blur(80px)',
          opacity: 0.22,
          zIndex: 0,
          y: y1,
          x: x1,
          pointerEvents: 'none',
        }}
        aria-hidden
      />
      <motion.div
        style={{
          position: 'fixed',
          bottom: '10vh',
          right: '10vw',
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fba16a 60%, #5cfcc1 100%)',
          filter: 'blur(70px)',
          opacity: 0.18,
          zIndex: 0,
          y: y2,
          x: x2,
          pointerEvents: 'none',
        }}
        aria-hidden
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <>
        <ParallaxCircles />
        <ScrollBlob />
        <BottomNav />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
