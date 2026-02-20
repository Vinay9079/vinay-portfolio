import GlassCard from '../components/GlassCard';

const internships = [
  {
    company: 'Lit-Amor',
    role: 'HR Manager Intern',
    duration: '2025 - Present',
  },
  {
    company: 'The SkyBrisk',
    role: 'Python Developer Intern',
    duration: '2025 - Present',
  },
  {
    company: 'Lean and Build',
    role: 'Python Language Intern',
    duration: 'June 2025 - July 2025',
  },
];

const Hire = () => (
  <section id="internship" className="section">
    <h2 className="section-title">Internship Experience</h2>
    <p className="section-subtitle">Real-world exposure across HR operations and Python development practice.</p>
    <div className="grid">
      {internships.map((item) => (
        <GlassCard key={item.company + item.role} title={item.company}>
          <p>{item.role}</p>
          <p style={{ color: '#9db2ce' }}>{item.duration}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default Hire;
