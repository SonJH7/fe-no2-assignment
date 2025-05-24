// src/context/PokemonContext.jsx
import React, { createContext, useState } from 'react';
import MOCK_DATA from '../mock';

// 전역 상태를 제공하는 Context 생성
export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  // 6칸 고정 슬롯: null = 빈칸, 객체 = 선택된 포켓몬
  const [slots, setSlots] = useState(Array(6).fill(null));

  // 포켓몬 추가 함수
  const addPokemon = (poke) => {
    if (slots.some(s => s?.id === poke.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    const idx = slots.indexOf(null);
    if (idx === -1) {
      alert('포켓몬은 최대 여섯개까지만 선택 할 수 있어요.');
      return;
    }
    const next = [...slots];
    next[idx] = poke;
    setSlots(next);
  };

  // 포켓몬 제거 함수: 해당 인덱스만 null로 변경
  const removePokemon = (id) => {
    setSlots(prev =>
      prev.map(s => (s?.id === id ? null : s))
    );
  };

  return (
    <PokemonContext.Provider
      value={{ slots, addPokemon, removePokemon, allPokemons: MOCK_DATA }}
    >
      {children}
    </PokemonContext.Provider>
  );
}