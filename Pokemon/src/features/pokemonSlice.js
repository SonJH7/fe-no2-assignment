// src/features/pokemonSlice.js
import { createSlice } from '@reduxjs/toolkit';
import MOCK_DATA from '../mock';

const initialState = {
  slots: Array(6).fill(null),
  allPokemons: MOCK_DATA
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const poke = action.payload;
      if (state.slots.some(s => s?.id === poke.id)) return;
      const idx = state.slots.indexOf(null);
      if (idx !== -1) state.slots[idx] = poke;
    },
    removePokemon: (state, action) => {
      const id = action.payload;
      state.slots = state.slots.map(s => (s?.id === id ? null : s));
    }
  }
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;