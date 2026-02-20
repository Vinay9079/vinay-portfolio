import GlassCard from '../components/GlassCard';

const Contact = () => (
  <section id="contact" className="section">
    <h2 className="section-title">Social & Contact</h2>
    <div className="grid">
      <GlassCard title="Direct Contact">
        <p>Email: <a href="mailto:Kumawatvinay28@gmail.com">Kumawatvinay28@gmail.com</a></p>
        <p>Phone: <a href="tel:+919079506381">9079506381</a></p>
      </GlassCard>
      <GlassCard title="Profiles">
        <p>
          GitHub: <a href="https://github.com/Vinay9079" target="_blank" rel="noreferrer">github.com/Vinay9079</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/vinay-kumawat-a0a02326b" target="_blank" rel="noreferrer">vinay-kumawat-a0a02326b</a>
        </p>
      </GlassCard>
    </div>
  </section>
);

export default Contact;
