import useFetchAPI from "../hooks/useFetchAPI";

export default function MyFilm(){
    const {ret: filme, loading, error } = useFetchAPI("https://www.omdbapi.com/?t=Jurassic+Park&apikey=a5e61038")
  
    if (loading) return <div>Loading</div>;
    if (error) return <div>Ocorreu um erro inesperado</div>;
  
  return (
    <div>
      <p className="rotulo">Meu filme favorito</p>
         <p>{filme?.Title}</p> 
          <img src={filme?.Poster}
            className="base"
            width="170"
            height="179"
            alt={`Pôster do filme ${filme?.Title}`}  
            ></img>
        </div>
  );
}