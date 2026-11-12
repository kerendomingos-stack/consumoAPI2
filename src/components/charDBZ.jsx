import { useState, useEffect } from "react";
import axios from "axios";

export default function CharDBZ (){
const [DBZ, setCharDBZ] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fechtCharDBZ = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://dragonball-api.com/api/characters/33"
        );
        
        setCharDBZ(response.data);
        setLoading(false);
      } catch (error) {
        console.error( "Erro ao carregar API", error);
        setLoading(false);
        setError(true);
      }
    }
    fechtCharDBZ();
  }, [])
   if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Ocorreu um erro inesperado</div>;
  }
  return (
<div>
    <img src={DBZ.image} className="base" height="280" alt=""
    style={{ marginTop: "50px" }}/>
    </div>
  )
}