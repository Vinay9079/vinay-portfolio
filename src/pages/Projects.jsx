import GlassCard from '../components/GlassCard';

const projects = [
  { name: 'AI Study Planner', desc: 'Smart scheduling assistant for students using Python logic and task scoring.' },
  { name: 'Neon Portfolio Engine', desc: 'Premium personal branding website with dynamic UI storytelling.' },
  { name: 'Internship Tracker App', desc: 'Dashboard to organize internship progress, tasks, and learning outcomes.' },
];

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section-title">Projects</h2>
    <p className="section-subtitle">A blend of AI experimentation and modern front-end execution.</p>
    <div className="grid">
      {projects.map((project) => (
        <GlassCard key={project.name} title={project.name}>
          <p>{project.desc}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default Projects;
