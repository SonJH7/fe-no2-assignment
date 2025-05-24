// src/pages/Dex.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import {
  PageWrapper,
  Container,
  SelectedSection,
  SelectedTitle,
  SelectedGrid,
  Placeholder,
  Main,
  CardGrid,
  Card,
  CardImage,
  Info,
  AddButton,
  DeleteButton
} from '../styles/DexStyles';

// 포켓몬볼 아이콘 URL
const POKEBALL_URL =
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fysfx0%2FbtsBB8HF65I%2F5SAuBMWppNvW04F3v2EZ30%2Fimg.png';

export default function Dex() {
  const navigate = useNavigate();
  const { slots, addPokemon, removePokemon, allPokemons } = useContext(PokemonContext);

  return (
    <PageWrapper>
      <Container>
        {/* ─── 상단: 6칸 슬롯 ─── */}
        <SelectedSection>
          <SelectedTitle>나만의 포켓몬</SelectedTitle>
          <SelectedGrid>
            {slots.map((poke, idx) => (
              poke ? (
                <Card key={idx}>
                  <div
                    onClick={() => navigate(`/detail/${poke.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <CardImage src={poke.img_url} alt={poke.korean_name} />
                    <Info>
                      <p>{poke.korean_name}</p>
                      <p>No. {String(poke.id).padStart(3, '0')}</p>
                    </Info>
                  </div>
                  <DeleteButton onClick={() => removePokemon(poke.id)}>
                    삭제
                  </DeleteButton>
                </Card>
              ) : (
                <Placeholder key={idx}>
                  <img
                    src={POKEBALL_URL}
                    alt="Pokeball Icon"
                    width={48}
                    height={48}
                  />
                </Placeholder>
              )
            ))}
          </SelectedGrid>
        </SelectedSection>

        {/* ─── 하단: 전체 포켓몬 도감 ─── */}
        <Main>
          <CardGrid>
            {allPokemons.map(poke => (
              <Card key={poke.id}>
                <div
                  onClick={() => navigate(`/detail/${poke.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <CardImage src={poke.img_url} alt={poke.korean_name} />
                  <Info>
                    <p>{poke.korean_name}</p>
                    <p>No. {String(poke.id).padStart(3, '0')}</p>
                  </Info>
                </div>
                <AddButton onClick={() => addPokemon(poke)}>
                  추가
                </AddButton>
              </Card>
            ))}
          </CardGrid>
        </Main>
      </Container>
    </PageWrapper>
  );
}
