`
import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.section``
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7f50, #ffcc00);
  color: white;
  position: relative;
  overflow: hidden;
`;`

const HeroContent = styled.div``
  text-align: center;
  z-index: 2;
  max-width: 600px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    margin: 20px 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: white;
    color: #ff7f50;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;`

const BackgroundEffect = styled.div``
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/path/to/your/3d-effect-image.png') no-repeat center center;
  background-size: cover;
  filter: blur(8px);
  z-index: 1;
`;`

const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer>
      <BackgroundEffect />
      <HeroContent>
        <h1>Welcome to GlamCS</h1>
        <p>Your destination for luxury cosmetics.</p>
        <button>Shop Now</button>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
`