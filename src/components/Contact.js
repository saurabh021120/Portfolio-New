import React from 'react';

const Contact = () => {
  const contactLinks = [
    { label: 'Email', value: '190030036.alum23@iitdh.ac.in', url: 'mailto:190030036.alum23@iitdh.ac.in', icon: '✉️' },
    { label: 'LinkedIn', value: 'Saurabh Ratnaparkhi', url: 'https://linkedin.com', icon: '🔗' },
    { label: 'LeetCode', value: 'Saurabh Ratnaparkhi', url: 'https://leetcode.com', icon: '💻' },
    { label: 'Phone', value: '+91 76663 53290', url: 'tel:+917666353290', icon: '📞' }
  ];

  return (
    <section id="contact">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {contactLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card" 
              style={{ 
                padding: '2rem', 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'var(--transition)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                textAlign: 'left'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <span style={{ fontSize: '2rem' }}>{link.icon}</span>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{link.label}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <footer style={{ padding: '4rem 0 2rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Designed & Built by <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Saurabh Ratnaparkhi</span>
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            © 2026 • IIT Dharwad Alumnus
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
