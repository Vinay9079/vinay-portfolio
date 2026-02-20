import HackingConsole from '../components/HackingConsole';
import HeroScene from '../three/HeroScene';

const Home = () => (
  <section id="home" className="section">
    <p className="chip floating-chip" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
      Software Engineer (AI)
    </p>
    <h1 className="section-title">I (AM) — ER. Vinay Kumawat</h1>
    <p className="section-subtitle">
      Premium cyber-neon portfolio experience with minimal professional aesthetics. Full dynamic personality, full ambition.
    </p>
    <div className="grid" style={{ alignItems: 'center' }}>
      <div>
        <p style={{ marginBottom: '0.8rem' }}>Date of Birth: 03/07/2007</p>
        <p style={{ marginBottom: '0.8rem' }}>Location: Jaipur, Rajasthan, India</p>
        <p style={{ marginBottom: '0.8rem' }}>Current Degree: B-Tech CS (AI)</p>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="chip">
          View Resume
        </a>
      </div>
      <HeroScene />
    </div>
    <div style={{ marginTop: '1.2rem' }}>
      <HackingConsole />
    </div>
  </section>
);

export default Home;
