import GlassCard from '../components/GlassCard';

const Query = () => (
  <section id="query" className="section">
    <h2 className="section-title">Query / Quarry Page</h2>
    <p className="section-subtitle">Share your requirement. Message goes directly to my Gmail inbox.</p>
    <GlassCard title="Send Query to Gmail">
      <form className="form-grid" action="https://formsubmit.co/Kumawatvinay28@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Portfolio Query from Website" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea name="message" rows="5" placeholder="Write your query..." required />
        <button type="submit">Send Query</button>
      </form>
      <p style={{ marginTop: '0.8rem', color: '#9db2ce' }}>After first submission, FormSubmit may ask one-time email verification.</p>
    </GlassCard>
  </section>
);

export default Query;
