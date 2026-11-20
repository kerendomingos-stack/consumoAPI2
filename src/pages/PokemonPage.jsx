import React from "react";
import { Link, useParams } from "react-router-dom";
import PokePet from "../components/meuPet";

function PokemonPage() {
  // Lê o ":nome" que veio na URL (ex: salamence, elgyem ou charizard)
  const { nome } = useParams();

  return (
    <div className="pokemon-page-container">
      <div className="topo-voltar">
        <Link to="/" className="btn-voltar">
          ⬅ Voltar para o Treinador
        </Link>
      </div>

      <section className="card-destaque secao-pokemon">
        <div className="topo-pokemon">
          <h1 className="titulo-secao">
            {nome ? `Pokébola: ${nome.toUpperCase()}` : "🎲 Encontre o Pokémon"}
          </h1>
        </div>

        {/* Passa o nome capturado para o seu componente PokePet */}
        <PokePet pokemonInicial={nome} />
      </section>
    </div>
  );
}

export default PokemonPage;