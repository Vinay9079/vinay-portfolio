const HeroScene = () => (
  <div className="hero-3d">
    <div className="hero-cube">
      <span className="cube-face front">AI</span>
      <span className="cube-face back">ML</span>
      <span className="cube-face left">PY</span>
      <span className="cube-face right">WEB</span>
      <span className="cube-face top">3D</span>
      <span className="cube-face bottom">VR</span>
    </div>
    <div className="hero-ring" />
    <div className="orb orb-one" />
    <div className="orb orb-two" />
    <div className="orb orb-three" />
    <div className="hero-profile-frame">
      <img src="/profile.jpg" alt="Vinay profile" />
    </div>
    <div className="mesh-grid" />
  </div>
);

export default HeroScene;
