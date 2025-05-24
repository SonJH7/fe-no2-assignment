import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import mockData from '../mock.js';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Dex() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find(p => p.id === pokemon.id)) {
      return alert('이미 선택된 포켓몬입니다.');
    }
    if (selected.length >= 6) {
      return alert('더 이상 선택할 수 없습니다.');
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter(p => p.id !== id));
  };

  return (
    <Container>
      <Dashboard
        selected={selected}
        onRemove={handleRemove}
      />
      <PokemonList
        pokemons={mockData}
        onAdd={handleAdd}
      />
    </Container>
  );
}
