import { useState, useEffect } from "react";
import axios from 'axios';

export default function Perfil (){
    const [perfil, setPerfil] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); 

    useEffect(() => {
        const fetchPerfil = async () => {
            setLoading(true);
            try{
                const response = await axios(
                    "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/32"
                );
            
                
                setPerfil(response.data);
                setLoading(false);
            }catch (error) { 
                console.error( "Erro ao carregar API", error); 
                setLoading(false); 
                setError(true); 
            } console.log("Error ao carregar API", error);
        } 
        fetchPerfil();
    },[])
 if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Ocorreu um erro inesperado</div>;
  }
  return (
<div>
    <p>{perfil.nome} {perfil.sobrenome}</p>
</div>
  )
}