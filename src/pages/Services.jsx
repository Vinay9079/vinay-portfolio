const services = ['AI-assisted web solutions', 'Portfolio branding websites', 'Python automation support', 'Career-ready project guidance'];

const Services = () => (
  <section id="services" className="section">
    <h2 className="section-title">Services</h2>
    <p className="section-subtitle">What I can build and support for clients, peers, and startups.</p>
    <div className="grid">
      {services.map((service) => (
        <div key={service} className="chip" style={{ width: 'fit-content' }}>
          {service}
        </div>
      ))}
    </div>
  </section>
);

export default Services;
