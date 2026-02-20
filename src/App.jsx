import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ClickSoundManager from './components/ClickSoundManager';
import SignupGate from './components/SignupGate';
import BackgroundFX from './components/BackgroundFX';
import Home from './pages/Home';
import Signup from './pages/Signup';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Internship from './pages/Hire';
import Blog from './pages/Blog';
import Query from './pages/Query';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(() => localStorage.getItem('vinay_client_signup') === 'done');

  const finishLoading = useCallback(() => setLoading(false), []);

  const unlockSite = useCallback(() => {
    localStorage.setItem('vinay_client_signup', 'done');
    setIsUnlocked(true);
  }, []);

  if (loading) {
    return <Loader onFinish={finishLoading} />;
  }

  return (
    <div className="app-shell">
      <BackgroundFX />
      <CustomCursor />
      <ClickSoundManager />
      {!isUnlocked && <SignupGate onSuccess={unlockSite} />}
      <Navbar />
      <PageTransition>
        <Home />
        <Signup />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Internship />
        <Blog />
        <Query />
        <Contact />
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;
