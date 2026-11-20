import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchAPI(url, char = ""){
    const [ret, setRet] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

useEffect(() =>{
        const getData = async() =>{
            setLoading(true);
            setError(false);
            try{
                const response = await axios.get(`${url}${char}`);
                setRet(response.data);
            }catch(error){
                setError(true);
                console.error("Erro ao carregar Api", error);
            } finally{
                setLoading(false);
            }
        }
    getData();
    },[url, char]);

    return{loading, error, ret};
}