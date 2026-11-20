import React from "react";
import { Link } from "react-router-dom";

function TrainerPage() {
  // Lista dos Pokémons capturados para gerar as pokébolas
  const meusPokemons = ["Salamence", "Elgyem", "Charizard"];

  return (
    <div className="main-bg">
      <div className="container trainer-container">
        <h1>Treinador Pokémon</h1>

        <div className="card trainer-card">
          {/* 1. Imagem / Avatar */}
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/169.png"
            alt="Avatar do Treinador"
            className="trainer-avatar"
          />

          {/* 2. Dados do Treinador */}
          <div className="trainer-info">
            <p><strong>Nome Completo:</strong> Keren Domingos</p>
            <p><strong>Idade:</strong> 22 anos</p>
            <p><strong>Nickname:</strong> @KerenMestrePoke</p>
            <p><strong>Quantidade de Pokémons:</strong> {meusPokemons.length}</p>
          </div>

          {/* 3. Pokébolas para acessar seus Pokémons (botões com Link) */}
          <div className="pokebolas-secao">
            <h3>Minhas Pokébolas</h3>
            <div className="pokebolas-lista">
              {meusPokemons.map((poke) => (
                <Link
                  key={poke}
                  to={`/pokemon/${poke.toLowerCase()}`}
                  className="btn-pokebola"
                >
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                    alt={`Pokébola de ${poke}`}
                  />
                  <span>{poke}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerPage;