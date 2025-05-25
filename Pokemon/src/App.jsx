// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import Detail from './pages/Detail';
import { PokemonProvider } from './context/PokemonContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
      <BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={2000}        // 2초 후 자동 닫기
        hideProgressBar        // 진행바 숨기기
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>

  );
}

export default App;
