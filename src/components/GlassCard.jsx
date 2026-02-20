const GlassCard = ({ title, children }) => (
  <article className="glass-card">
    {title && <h3 style={{ marginBottom: '0.7rem' }}>{title}</h3>}
    {children}
  </article>
);

export default GlassCard;
