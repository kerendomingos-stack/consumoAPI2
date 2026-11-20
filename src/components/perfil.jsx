import useFetchAPI from "../hooks/useFetchAPI";

export default function Perfil (){
    const {ret:perfil, loading, error} = useFetchAPI ("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/32");

    if (loading) return <div>Loading</div>;
    if (error) return <div>Ocorreu um erro inesperado</div>;
     
     return (
        <div>
            <p className="nome-perfil">{perfil?.nome} {perfil?.sobrenome}</p>
        </div>
    ) 
}