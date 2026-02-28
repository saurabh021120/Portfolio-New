import React from 'react';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['Javascript', 'Java', 'Python', 'C++', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Redux', 'Context API', 'HTML5', 'CSS', 'Tailwind CSS', 'Material UI'] },
    { category: 'Backend', items: ['Nodejs', 'Express.js', 'Django', 'MongoDB', 'MySQL', 'REST APIs', 'Microservices', 'Redis'] },
    { category: 'Coursework', items: ['Data Structures & Algorithms', 'DBMS', 'System Design', 'Computer Networks', 'OOPs'] },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              I am a graduate of the Indian Institute of Technology (IIT), Dharwad (Class of 2023), with a strong foundation in Computer Science and Engineering. Currently, I work as an SDE-1 at Truminds Software Systems, where I build and scale high-performance web and mobile applications.
            </p>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
              <p style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>Indian Institute of Technology (IIT), Dharwad</p>
              <p style={{ color: 'var(--text-secondary)' }}>B.Tech in Computer Science | CGPA: 8.1/10.0</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Aug 2019 – April 2023</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1rem' }}>{skillGroup.category}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      style={{ 
                        padding: '0.3rem 0.8rem', 
                        background: 'var(--glass)', 
                        border: '1px solid var(--glass-border)', 
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
