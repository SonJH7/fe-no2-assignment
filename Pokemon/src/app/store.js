// src/app/store.js
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

// Persist 설정
const persistConfig = { key: 'root', storage, whitelist: ['pokemon'] };
const persistedReducer = persistReducer(persistConfig, pokemonReducer);

// Store 생성
export const store = configureStore({
  reducer: {
    pokemon: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist 액션 무시
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// Persistor 생성
export const persistor = persistStore(store);
