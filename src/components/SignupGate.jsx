import { useState } from 'react';

const SignupGate = ({ onSuccess }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      setError('Enter valid 10-digit phone number to continue.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('vinay_signups') || '[]');
    localStorage.setItem(
      'vinay_signups',
      JSON.stringify([...existing, { phone, source: 'entry-gate', time: new Date().toISOString() }]),
    );
    onSuccess();
  };

  return (
    <div className="signup-gate">
      <div className="signup-gate-card">
        <p className="loader-tag">Client Access</p>
        <h2>Quick Phone Signup</h2>
        <p className="section-subtitle">Please signup first to enter this premium portfolio experience.</p>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="10-digit phone number"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value.replace(/\D/g, '').slice(0, 10));
              setError('');
            }}
          />
          <button type="submit">Enter Website</button>
        </form>
        {error && <p className="form-error">{error}</p>}
      </div>
    </div>
  );
};

export default SignupGate;
