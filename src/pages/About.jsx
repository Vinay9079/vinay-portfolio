import GlassCard from '../components/GlassCard';

const About = () => (
  <section id="about" className="section">
    <h2 className="section-title">About Me</h2>
    <p className="section-subtitle">A focused learner building AI-first software products with premium UX thinking.</p>
    <div className="grid">
      <GlassCard title="Short Intro">
        <p>
          I am ER. Vinay Kumawat, a future-ready software engineer in AI. I blend coding, business understanding, and clear communication to build impactful digital experiences.
        </p>
      </GlassCard>
      <GlassCard title="Education Timeline">
        <ul style={{ paddingLeft: '1rem', lineHeight: 1.7 }}>
          <li>B-Tech CS (AI) — current</li>
          <li>12th completed in 2024 from Saraswati Vidhya Nikatan School</li>
          <li>RS-CIT Diploma completed in 2024 at Disha Classes</li>
        </ul>
      </GlassCard>
      <GlassCard title="Photo Section">
        <p>Add your image as <b>/public/profile.jpg</b> and replace this block with an &lt;img /&gt; tag.</p>
      </GlassCard>
    </div>
  </section>
);

export default About;
