import React from 'react';

const Hero = () => {
  const sectionStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '4rem',
    background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
  };

  const contentStyles = {
    maxWidth: '800px',
  };

  const badgeStyles = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: 'var(--glass)',
    border: '1px solid var(--glass-border)',
    borderRadius: '2rem',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--accent-primary)',
    marginBottom: '1.5rem',
  };

  const titleStyles = {
    fontSize: ' clamp(3rem, 8vw, 5rem)',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
  };

  return (
    <section id="home" style={sectionStyles}>
      <div className="container">
        <div style={contentStyles} className="reveal">
          <span style={badgeStyles}>Software Engineer @ Truminds</span>
          <h1 style={titleStyles}>
            Crafting Digital <br />
            <span className="gradient-text">Experiences That Scale.</span>
          </h1>
          <p style={subtitleStyles}>
            I'm Saurabh Ratnaparkhi, a Software Developer specialized in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Truminds.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a 
              href="https://drive.google.com/file/d/1MkyqUtggA3-0u7ZenbRrVR4ISw7p4Tsg/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '0.8rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                fontWeight: '600',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass)',
                transition: 'var(--transition)'
              }}
              onMouseOver={(e) => e.target.style.background = 'var(--glass-border)'}
              onMouseOut={(e) => e.target.style.background = 'var(--glass)'}
            >
              Resume
            </a>
            <a 
              href="#contact" 
              style={{ 
                padding: '0.8rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                fontWeight: '600',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass)',
                transition: 'var(--transition)'
              }}
              onMouseOver={(e) => e.target.style.background = 'var(--glass-border)'}
              onMouseOut={(e) => e.target.style.background = 'var(--glass)'}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
