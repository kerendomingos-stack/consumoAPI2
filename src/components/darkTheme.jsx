
export default function DarkTheme({ temaEscuro, setTemaEscuro}) { 
    return(
        <button
            type="button"
            className="tema"
            onClick={() => setTemaEscuro(!temaEscuro)}
        >
            {temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"}
        </button>
    );
}