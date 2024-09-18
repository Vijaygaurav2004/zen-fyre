import React, { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaCode, FaUsers, FaArrowRight } from 'react-icons/fa';

function App() {
  const [particles, setParticles] = useState([]);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 3 - 1.5,
          speedY: Math.random() * 3 - 1.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(() => {
      setParticles(prevParticles => prevParticles.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4C00C3 0%, #3A0099 50%, #280070 100%)',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    overflow: 'hidden',
    position: 'relative',
  };

  const particleStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '50%',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 0',
  };

  const logoStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '30px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'all 0.3s',
    position: 'relative',
  };

  const activeLinkStyle = {
    ...linkStyle,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-5px',
      left: 0,
      width: '100%',
      height: '2px',
      background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  };

  const buttonStyle = {
    backgroundColor: '#FF6B6B',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '100px 0',
  };

  const titleStyle = {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    fontSize: '24px',
    fontWeight: '300',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
  };

  const featureCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '40px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const featureIconStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#4ECDC4',
  };

  const features = [
    { icon: <FaRocket style={featureIconStyle} />, title: 'Fast Integration', description: 'Seamlessly integrate AI into your workflow' },
    { icon: <FaChartLine style={featureIconStyle} />, title: 'Advanced Analytics', description: 'Gain insights with powerful AI-driven analytics' },
    { icon: <FaCode style={featureIconStyle} />, title: 'Developer Friendly', description: 'Robust APIs and SDKs for easy development' },
    { icon: <FaUsers style={featureIconStyle} />, title: 'Collaboration', description: 'Foster teamwork with AI-enhanced tools' },
  ];

  return (
    <div style={backgroundStyle}>
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            ...particleStyle,
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
      <div style={containerStyle}>
        <nav style={navbarStyle}>
          <div style={logoStyle}>Zen Fyre</div>
          <div style={navLinksStyle}>
            {['Home', 'Features', 'Pricing', 'About'].map((link) => (
              <a key={link} href="#" style={activeLinkStyle}>
                {link}
              </a>
            ))}
          </div>
        </nav>

        <div style={heroStyle}>
          <h1 style={titleStyle}>Your AI Workplace for all your needs</h1>
          <p style={subtitleStyle}>
            Unlock the power of AI to streamline your workflow, boost productivity, and drive innovation.
          </p>
          <button 
            style={{
              ...buttonStyle, 
              padding: '16px 32px', 
              fontSize: '18px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} 
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} 
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Get Started <FaArrowRight style={{marginLeft: '10px'}} />
          </button>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '80px'}}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                ...featureCardStyle,
                transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeFeature === index ? '0 10px 30px rgba(0, 0, 0, 0.2)' : 'none',
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {feature.icon}
              <h3 style={{fontSize: '24px', marginBottom: '15px'}}>{feature.title}</h3>
              <p style={{fontSize: '16px', lineHeight: '1.6'}}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>
          <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Ready to Transform Your Workflow?</h2>
          <button 
            style={{
              ...buttonStyle, 
              padding: '16px 32px', 
              fontSize: '18px', 
              backgroundColor: '#4ECDC4',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} 
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} 
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Get Started Now <FaArrowRight style={{marginLeft: '10px'}} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
