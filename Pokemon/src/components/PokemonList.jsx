import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const Grid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export default function PokemonList({ pokemons, onAdd }) {
  return (
    <Grid>
      {pokemons.map(p => (
        <PokemonCard
          key={p.id}
          pokemon={p}
          onAdd={onAdd}
        />
      ))}
    </Grid>
  );
}
