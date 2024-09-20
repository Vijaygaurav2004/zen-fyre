import React, { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaCode, FaUsers, FaTimes, FaCheck, FaLightbulb, FaHandshake, FaGlobe, FaShoppingCart } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const BackgroundWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: white;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 80px; // Add padding to account for fixed navbar
  min-height: 100vh; // Ensure the content wrapper takes at least the full viewport height
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  background: rgba(15, 12, 41, 0.9);
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto; // Push the footer to the bottom
`;

const StyledButton = styled.button`
  background: #a370f0;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;

  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }

  &:hover .icon {
    width: calc(100% - 0.6em);
  }

  .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  &:hover .icon svg {
    transform: translateX(0.1em);
  }

  &:active .icon {
    transform: scale(0.95);
  }
`;

const Button = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    Get started
    <div className="icon">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
      </svg>
    </div>
  </StyledButton>
);

const HeroSection = styled.div`
  text-align: center;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const modalAnimation = keyframes`
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  animation: ${modalAnimation} 0.3s ease-out;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  padding: 10px 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: white;
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const AuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <TabContainer>
          <Tab active={activeTab === 'login'} onClick={() => setActiveTab('login')}>Login</Tab>
          <Tab active={activeTab === 'signup'} onClick={() => setActiveTab('signup')}>Sign Up</Tab>
        </TabContainer>
        {activeTab === 'login' ? (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        ) : (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Input type="password" placeholder="Confirm Password" required />
            <SubmitButton type="submit">Sign Up</SubmitButton>
          </Form>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

const PricingCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }

  svg {
    margin-right: 10px;
  }
`;

const AboutSection = styled.div`
  text-align: center;
  padding: 80px 0;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ValueProposition = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
`;

const ValueIcon = styled.div`
  font-size: 36px;
  margin-bottom: 15px;
  color: #4ECDC4;
`;

const ValueText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const JoinButton = styled.button`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 12, 41, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 20px 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const FeatureCard = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: #4ECDC4;
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * document.documentElement.scrollHeight,
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
        y: (particle.y + particle.speedY + document.documentElement.scrollHeight) % document.documentElement.scrollHeight,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const particleStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    pointerEvents: 'none',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: '56px',
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
  };

  const features = [
    { icon: <FaRocket />, title: 'Fast Integration', description: 'Seamlessly integrate AI into your workflow' },
    { icon: <FaChartLine />, title: 'Advanced Analytics', description: 'Gain insights with powerful AI-driven analytics' },
    { icon: <FaCode />, title: 'Developer Friendly', description: 'Robust APIs and SDKs for easy development' },
    { icon: <FaUsers />, title: 'Collaboration', description: 'Foster teamwork with AI-enhanced tools' },
  ];

  const pricingPlans = [
    { name: 'Basic', price: '$29', features: ['1 AI Assistant', '100 Queries/day', 'Email Support'] },
    { name: 'Pro', price: '$99', features: ['3 AI Assistants', 'Unlimited Queries', '24/7 Support', 'Custom Integrations'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited AI Assistants', 'Dedicated Account Manager', 'On-premise Deployment', 'Custom AI Models'] },
  ];

  const handleBuyNow = (planName) => {
    // Implement your buy now logic here
    console.log(`Buying ${planName} plan`);
    // You might want to redirect to a checkout page or open a payment modal
  };

  const handleJoinJourney = () => {
    // Implement your join journey logic here
    console.log("Joining the journey");
    // You might want to open a signup form or redirect to a community page
  };

  return (
    <BackgroundWrapper>
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
      <NavBar>
        <NavContent>
          <Logo>Zen Fyre</Logo>
          <NavLinks>
            {['Home', 'Features', 'Pricing', 'About'].map((link) => (
              <NavLink key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </NavLinks>
        </NavContent>
      </NavBar>
      <ContentWrapper>
        <MainContent>
          <div style={containerStyle}>
            <HeroSection id="home">
              <h1 style={titleStyle}>Your AI Workplace for all your needs</h1>
              <p style={subtitleStyle}>
                Unlock the power of AI to streamline your workflow, boost productivity, and drive innovation.
              </p>
              <ButtonWrapper>
                <Button onClick={() => setShowModal(true)} />
              </ButtonWrapper>
            </HeroSection>

            <FeaturesSection id="features">
              {features.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <h3 style={{fontSize: '24px', marginBottom: '15px'}}>{feature.title}</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.6'}}>{feature.description}</p>
                </FeatureCard>
              ))}
            </FeaturesSection>

            <div id="pricing" style={{marginBottom: '80px'}}>
              <h2 style={{fontSize: '36px', textAlign: 'center', marginBottom: '40px'}}>Choose Your Plan</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index}>
                    <h3 style={{fontSize: '24px', marginBottom: '10px'}}>{plan.name}</h3>
                    <p style={{fontSize: '36px', fontWeight: 'bold', marginBottom: '20px'}}>{plan.price}</p>
                    <ul style={{listStyle: 'none', padding: 0}}>
                      {plan.features.map((feature, idx) => (
                        <PricingFeature key={idx}>
                          <FaCheck style={{color: '#4ECDC4', marginRight: '10px'}} />
                          {feature}
                        </PricingFeature>
                      ))}
                    </ul>
                    <BuyButton onClick={() => handleBuyNow(plan.name)}>
                      <FaShoppingCart /> Buy Now
                    </BuyButton>
                  </PricingCard>
                ))}
              </div>
            </div>

            <AboutSection id="about">
              <AboutTitle>About Zen Fyre</AboutTitle>
              <AboutDescription>
                Zen Fyre is at the forefront of AI-powered workplace solutions. Our mission is to empower businesses with cutting-edge AI technology, enhancing productivity and fostering innovation across all sectors.
              </AboutDescription>
              <ValueProposition>
                <ValueItem>
                  <ValueIcon><FaLightbulb /></ValueIcon>
                  <ValueText>Innovative AI Solutions</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueIcon><FaHandshake /></ValueIcon>
                  <ValueText>Dedicated Support</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueIcon><FaGlobe /></ValueIcon>
                  <ValueText>Global Reach</ValueText>
                </ValueItem>
              </ValueProposition>
              <AboutDescription>
                Founded by a team of AI experts and industry veterans, we're committed to making advanced AI accessible and practical for businesses of all sizes. Join us in shaping the future of work.
              </AboutDescription>
              <JoinButton onClick={handleJoinJourney}>Join Our Journey</JoinButton>
            </AboutSection>
          </div>
        </MainContent>
        <Footer>
          © 2023 Zen Fyre. All rights reserved.
        </Footer>
      </ContentWrapper>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </BackgroundWrapper>
  );
}

export default App;