import useFetchAPI from "../hooks/useFetchAPI";

export default function CharDBZ (){
const {ret: DBZ, loading, error } = useFetchAPI(
          "https://dragonball-api.com/api/characters/33"
        );

   if (loading) return <div>Loading</div>;
  if (error) return <div>Ocorreu um erro inesperado</div>;
  
  return (
<div className="dbz-container">
      <h3>Personagem DBZ</h3>
      {/* Agora o React sabe exatamente quem é a variável DBZ */}
      <p>Nome: {DBZ?.name}</p>
      <p>Raça: {DBZ?.race}</p>
      {DBZ?.image && (
        <img src={DBZ.image} alt={DBZ?.name} style={{ width: "150px" }} />
      )}
    </div>
  );
}