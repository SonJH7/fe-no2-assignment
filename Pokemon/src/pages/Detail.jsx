import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemon, removePokemon } from '../features/pokemonSlice';
import { AddButton } from '../styles/DexStyles';

const AddDetailButton = styled(AddButton)`
  margin: 1rem 0;
  width: 100%;
  max-width: 200px;
`;

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Img = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Title = styled.h1`
  color: #e63946;
  margin: 1rem 0;
  font-size: 2rem;
  text-align: center;
`;

const Type = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
`;

const BackButton = styled.button`
  background: #f1f1f1;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover { background: #e0e0e0; }
`;

// Detail component
export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { slots, allPokemons } = useSelector(state => state.pokemon);
  const pokemon = allPokemons.find(p => p.id === Number(id));
  const isAdded = slots.some(s => s?.id === pokemon.id);
  if (!pokemon) {
    return <Wrapper><p>정보를 찾을 수 없습니다.</p></Wrapper>;
  }

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← 뒤로 가기</BackButton>
      <AddDetailButton onClick={() => {
        isAdded
          ? dispatch(removePokemon(pokemon.id))
          : dispatch(addPokemon(pokemon));
      }}>
        {isAdded ? '삭제' : '추가'}
      </AddDetailButton>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <Title>{pokemon.korean_name}</Title>
      <Type>타입: {pokemon.types.join(', ')}</Type>
      <Description>{pokemon.description}</Description>
    </Wrapper>
  );
}
