import { useState } from "react"
export default function AddTask(props){
    const [input, setInput] = useState({
        title:"",
        description:""
    })
    return (
        <>

            <form action="#" onSubmit={(e)=> {
                e.preventDefault();
                props.onTaskAdd(input);
                setInput({title:"", description:""})
            }}>
                <div><input type="text" name="tittle" id="tittle" placeholder="Adiciona um titulo"
                onChange={(e)=>{setInput({...input, title: e.target.value})}} value={input.title} required/></div>

                <div><input type="text" name="description" id="description" placeholder="Adiciona uma descricao"
                onChange={(e)=> {setInput({...input,description: e.target.value})}} value={input.description}/></div>
                <div>
                    <button type="submit">Adicionar Tarefa</button>
                </div>
            </form>

        </>
    )
}