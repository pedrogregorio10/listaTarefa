import { useNavigate } from 'react-router-dom';
import './ListTask.css';

export default function ListTask(props){
    let navigate = useNavigate();
    return (
        <>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}>
                        <button 
                            onClick={()=>props.onTaskClick(task.id)} 
                            style={{ textDecoration: task.isCompleted? "line-through":"none" }}
                        >{task.id} - {task.title} </button>

                        <button onClick={()=> {
                            navigate(`/details?title=${encodeURIComponent(task.title)}&description=${encodeURIComponent(task.description)}`)
                        }}>Detalhe</button>
                        
                        <button onClick={()=>props.onTaskDelete(task.id)}>Remover</button> 
                    </li>
                )) }
            </ul>

        </>
    )
}