import { useState } from 'react';
import GlassCard from '../components/GlassCard';

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      setMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('vinay_signups') || '[]');
    const updated = [...existing, { phone, source: 'signup-section', time: new Date().toISOString() }];
    localStorage.setItem('vinay_signups', JSON.stringify(updated));
    setMessage('Thanks! Your signup is saved. I will connect with you soon.');
    setPhone('');
  };

  return (
    <section id="signup" className="section">
      <h2 className="section-title">Client Signup</h2>
      <p className="section-subtitle">Enter your phone number for quick callback and collaboration.</p>
      <GlassCard title="Quick Signup by Phone">
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))}
          />
          <button type="submit">Sign Up</button>
        </form>
        {message && <p style={{ marginTop: '0.8rem', color: '#9df3d0' }}>{message}</p>}
      </GlassCard>
    </section>
  );
};

export default Signup;
