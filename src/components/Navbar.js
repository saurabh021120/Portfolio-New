import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'var(--transition)',
    padding: scrolled ? '1rem 0' : '1.5rem 0',
    background: scrolled ? 'rgba(10, 10, 12, 0.8)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: '800',
    fontFamily: 'Outfit, sans-serif',
    textDecoration: 'none',
    color: 'var(--text-primary)',
  };

  const linksStyles = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  };

  const linkStyles = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'var(--transition)',
    '&:hover': {
      color: 'var(--accent-primary)',
    }
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={containerStyles}>
        <a href="#home" style={logoStyles}>
          SR<span className="gradient-text">.</span>
        </a>
        <ul style={linksStyles}>
          <li><a href="#about" style={linkStyles}>About</a></li>
          <li><a href="#experience" style={linkStyles}>Experience</a></li>
          <li><a href="#projects" style={linkStyles}>Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1MkyqUtggA3-0u7ZenbRrVR4ISw7p4Tsg/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={linkStyles}>Resume</a></li>
          <li><a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Get in Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
