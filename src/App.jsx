import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import axios from "axios";
import MovieTe from "./components/listMovie";
import Perfil from "./components/perfil";
import CharDBZ from "./components/charDBZ";

export default function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [DBZ, setDBZ] = useState({});
  const [poke, setPoke] = useState({});
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const responseDBZ = await axios.get(
          "https://dragonball-api.com/api/characters/33",
        );
        const responsePoke = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/Salamence",
        );
        const responseFilme = await axios.get(
          "https://www.omdbapi.com/?t=Jurassic+Park&apikey=a5e61038",
        );

        setPoke(responsePoke.data);
        setDBZ(responseDBZ.data);
        setFilme(responseFilme.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("Error: ", error);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Ocorreu um erro inesperado</div>;
  }

  return (
    <>
      <section id="center">
        <div>
          <MovieTe/>
        </div>
        <div>
          <CharDBZ/>
        </div>
        <div>
          <Perfil></Perfil>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>{poke.species.name}</h2>
          <img
            src={poke.sprites.front_shiny}
            className="base"
            width="170"
            height="179"
            alt=""
          />

          <h2>Meu filme favorito é: {filme.Title}</h2>
          <img
            src={filme.Poster}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <p>Nota do IMDB: {filme.imdbRating}</p>

        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

