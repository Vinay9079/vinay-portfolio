import GlassCard from '../components/GlassCard';

const skillGroups = {
  'AI & Programming': ['Python', 'Machine Learning Basics', 'Prompt Engineering', 'Data Handling'],
  'Web Development': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  'Professional Skills': ['Team Leadership', 'HR Coordination', 'Problem Solving', 'Communication'],
};

const Skills = () => (
  <section id="skills" className="section">
    <h2 className="section-title"> Skills</h2>
    <p className="section-subtitle">Technical and professional strengths curated for growth and premium project delivery.</p>
    <div className="grid">
      {Object.entries(skillGroups).map(([title, list]) => (
        <GlassCard key={title} title={title}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {list.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default Skills;
