const links = [
  'home',
  'signup',
  'about',
  'skills',
  'projects',
  'services',
  'internship',
  'blog',
  'query',
  'contact',
];

const scrollToSection = (id) => (event) => {
  event.preventDefault();
  const target = document.getElementById(id);

  if (!target) {
    window.location.hash = id;
    return;
  }

  const yOffset = -120;
  const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const Navbar = () => (
  <header className="nav-shell">
    <nav className="nav-inner">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <strong>ER. Vinay Kumawat</strong>
        <a
          href="#signup"
          onClick={scrollToSection('signup')}
          className="chip cyber-font"
          style={{ background: 'rgba(93, 225, 255, 0.16)' }}
        >
          Login Portal
        </a>
      </div>
      <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: '0.9rem' }}>
        {links.map((id) => (
          <a key={id} href={`#${id}`} className="chip" onClick={scrollToSection(id)}>
            {id.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default Navbar;
