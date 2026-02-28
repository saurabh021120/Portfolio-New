import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Spleen.ai',
      role: 'Founding Engineer',
      description: 'Designed and implemented a job aggregation backend collecting 60,000+ listings from 178+ resources using Crawler Architecture and Cron jobs.',
      features: ['Real-time resume filtering', 'Scalable API platform', 'PostgreSQL schema with 60K+ records', '55% reduction in response time via query tuning'],
      tech: ['Django', 'PostgreSQL', 'REST APIs', 'Crawler Architecture', 'Redis'],
      links: [
        { label: 'Live Link', url: 'https://spleen.ai/' }
      ]
    },
    {
      title: 'URL Shortener',
      role: 'Developer',
      description: 'A robust URL shortening service with analytics and custom aliases.',
      features: ['Custom short aliases', 'Click tracking and analytics', 'Rapid redirection mechanism'],
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      links: [
        { label: 'Source Code', url: '#' }
      ]
    },
    {
      title: 'Summer of Innovation',
      role: 'Event Website Developer',
      description: 'A dynamic event website built for the Summer of Innovation gathering.',
      features: ['Responsive event schedule', 'Speaker profiles and sessions', 'User registration flow'],
      tech: ['React', 'Material UI', 'Context API'],
      links: [
        { label: 'Live Link', url: '#' }
      ]
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A selection of my recent works, ranging from scalable backend architectures to dynamic frontend applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.role}</span>
                <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{project.description}</p>
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>▹</span> {feature}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', padding: '0.2rem 0.6rem', borderRadius: '0.3rem' }}>{t}</span>
                ))}
              </div>

              {project.links && (
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                  {project.links.map((link, lIdx) => (
                    <a key={lIdx} href={link.url} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', transition: 'var(--transition)' }} 
                       onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                       onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                      {link.label} <span style={{ marginLeft: '0.3rem' }}>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
