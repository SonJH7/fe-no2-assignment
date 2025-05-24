import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export default function PokemonCard({ pokemon, onAdd }) {
  const nav = useNavigate();
  return (
    <Card>
      <h3 onClick={() => nav(`/detail/${pokemon.id}`)}>
        {pokemon.name}
      </h3>
      <Img src={pokemon.image} alt={pokemon.name} />
      <p>타입: {pokemon.type.join(', ')}</p>
      <Button onClick={() => onAdd(pokemon)}>추가</Button>
    </Card>
  );
}
