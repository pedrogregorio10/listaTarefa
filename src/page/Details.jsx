import { useSearchParams } from "react-router-dom"
import '../Details.css';

export default function Details() {
    let [searchParam] = useSearchParams();
    let title = searchParam.get("title");
    let description = searchParam.get("description")
    return(
        <>
            <h1>Aqui esta fofo</h1>
            <h6>Titulo da tarefa</h6>
            <p>{title}</p>
            <h6>Descricao da tarefa</h6>
            <p>{description}</p>
            <button onClick={()=>{window.location.href="/"}}>Voltar</button>
        </>
    )
}