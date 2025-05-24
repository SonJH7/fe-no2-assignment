import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mockData from '../mock';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Img = styled.img`
  width: 200px;
`;

export default function Detail() {
  const { id } = useParams();
  const nav = useNavigate();
  const pokemon = mockData.find(p => p.id === Number(id));

  if (!pokemon) return <p>정보를 찾을 수 없습니다.</p>;

  return (
    <Wrapper>
      <button onClick={() => nav(-1)}>← 뒤로 가기</button>
      <h1>{pokemon.name}</h1>
      <Img src={pokemon.image} alt={pokemon.name} />
      <p>타입: {pokemon.type.join(', ')}</p>
      <p>{pokemon.description}</p>
    </Wrapper>
  );
}
