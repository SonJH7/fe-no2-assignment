import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
`;

export default function Home() {
  const nav = useNavigate();
  return (
    <Wrapper>
      <Button onClick={() => nav('/dex')}>
        포켓몬 도감 시작하기
      </Button>
    </Wrapper>
  );
}
