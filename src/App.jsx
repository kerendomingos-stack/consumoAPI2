import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Perfil from "./components/perfil";
import DarkTheme from "./components/darkTheme";
import TrainerPage from "./pages/TrainerPage";
import PokemonPage from "./pages/PokemonPage";

export default function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <BrowserRouter>
      <div className={temaEscuro ? "app-container tema-escuro" : "app-container tema-claro"}>
        
        <header className="cabecalho">
          <Perfil />
          <DarkTheme temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
        </header>

        <Routes>
          <Route path="/" element={<TrainerPage />} />
          <Route path="/pokemon/:nome" element={<PokemonPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}