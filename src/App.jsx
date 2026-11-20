import "./App.css";

import MovieTe from "./components/listMovie";
import Perfil from "./components/perfil";
import CharDBZ from "./components/charDBZ";
import MyFilm from "./components/myFilm";
import PokePet from "./components/meuPet";
import DarkTheme from "./components/darkTheme";
import { useState } from "react";


export default function App() {
   const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <div className={temaEscuro ? "app-container tema-escuro" : "app-container tema-claro"}>
      
      {/* Cabeçalho com Perfil e Botão de Tema */}
      <header className="cabecalho">
        <Perfil />
        <DarkTheme temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
      </header>

      {/* Seção Principal: Pokémon em Destaque */}
      <section className="card-destaque secao-pokemon">
        <h1 className="titulo-secao">🎲 Encontre o Pokémon</h1>
        <PokePet />
      </section>

      {/* Grid com Personagem DBZ, Filme Favorito e Busca lado a lado */}
      <main className="grid-conteudo">
        <div className="card">
          <CharDBZ />
        </div>

        <div className="card">
          <MyFilm />
        </div>

        <div className="card">
          <MovieTe />
        </div>
      </main>

    </div>
  );
}