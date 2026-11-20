import { useState } from "react";
import PokemonCard from "./pokemonCard";
import PokeEvolucao from "./pokeEvulacao";
import useFetchAPI from "../hooks/useFetchAPI";

const TOTAL_POKEMON = 1025;

export default function PokePet() {
    const [id,setId] = useState(373);

    const {ret: poke, loading, error} = useFetchAPI(
                    `https://pokeapi.co/api/v2/pokemon/${id}`,
                ); 

                
    function sortear() {
    const novoId = Math.floor(Math.random() * TOTAL_POKEMON) + 1;
    setId(novoId);
  }

  return (
    <div className="pokepet">
      <button
        type="button"
        className="botao-sortear"
        onClick={sortear}
        disabled={loading}
      >
        {loading ? "Procurando..." : "🎲 Encontrar Pokémon"}
      </button>

      {loading && (
        <div className="estado">
          <div className="spinner"></div>
          <p>Procurando Pokémon...</p>
        </div>
      )}

      
      {!loading && error && (
        <div className="estado estado-erro">
          <p>Verifique sua conexão e tente de novo.</p>
        </div>
      )}

  
      {!loading && !error && poke?.species && (
        <div className="pokepet-conteudo">

          <PokemonCard
            nome={poke.species.name}
            imagem={poke.sprites.front_default}
            tipo={poke.types[0].type.name}
            peso={poke.weight}
            vida={poke.stats[0].base_stat}
            ataque={poke.stats[1].base_stat}
          />

          <PokeEvolucao nome={poke.species.name} />
        </div>
      )}
    </div>
  );
}
