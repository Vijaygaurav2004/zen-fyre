import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AuthWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Title = styled.h2`
  font-size: 28px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: white;
  color: #e73c7e;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e73c7e;
    color: white;
  }
`;

const ToggleText = styled.p`
  color: white;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        {!isLogin && <Input type="password" placeholder="Confirm Password" />}
        <Button>{isLogin ? 'Login' : 'Sign Up'}</Button>
        <ToggleText onClick={toggleMode}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </ToggleText>
      </AuthCard>
    </AuthWrapper>
  );
}

export default Auth;