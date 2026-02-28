import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Truminds Software Systems',
      role: 'SDE-1',
      period: 'May 2023 – Present',
      points: [
        'Built and scaled MERN-based applications for Kognitive Networks, supporting 453+ global distributors and 15,000+ users.',
        'Developed and maintained RESTful APIs in a scalable Microservices Architecture for over 1000+ plans.',
        'Enhanced MongoDB efficiency and implemented Redis caching, lowering latency by 4%.',
        'Integrated Stripe payment gateway, processing 1200+ transactions per week.',
        'Developed cross-platform React Native app for network connectivity and admin tracking.'
      ],
      tech: ['MERN Stack', 'React Native', 'Redis', 'Stripe', 'Microservices']
    },
    {
      company: 'Careerbolt',
      role: 'Software Engineer Intern',
      period: 'Aug 2022 – Feb 2023',
      points: [
        'Spearheaded the development of a cutting-edge dashboard using React and Material UI, managing 6000+ student records.',
        'Implemented lazy loading, useMemo, debouncing, and API abstraction for performance.',
        'Utilized bcrypt and JWT for secure authentication and authorization.'
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'JWT', 'Material UI']
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
          Professional <span className="gradient-text">Journey</span>
        </h2>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '20px', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)',
            opacity: 0.3
          }}></div>

          {experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '4rem', paddingLeft: '60px', position: 'relative' }}>
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '11px', 
                top: '0', 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: 'var(--accent-primary)',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 0 15px var(--accent-primary)'
              }}></div>

              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1rem' }}>{exp.company}</p>
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>{exp.period}</span>
                </div>
                
                <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem' }}>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', fontSize: '1rem' }}>{point}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {exp.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{ 
                        padding: '0.3rem 0.8rem', 
                        background: 'rgba(99, 102, 241, 0.1)', 
                        border: '1px solid rgba(99, 102, 241, 0.2)', 
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        color: 'var(--accent-primary)',
                        fontWeight: '600'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
