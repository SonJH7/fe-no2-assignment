// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
    const navigate = useNavigate();
    const logoUrl = 'https://fontmeme.com/images/Pokemon-Logo.jpg';

    return (
        <div className="app-container">
            <Wrapper>
                <LogoImg
                    src={logoUrl}
                    alt="Pokemon Logo"
                    onClick={() => navigate('/dex')}
                />
                <StartButton onClick={() => navigate('/dex')}>
                    포켓몬 도감 시작하기
                </StartButton>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoImg = styled.img`
  width: 700px;
  cursor: pointer;
`;

const StartButton = styled.button`
    padding: 0.75rem 1.5rem;
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;
