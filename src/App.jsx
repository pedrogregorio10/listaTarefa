import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './AddTask'
import ListTask from './ListTask'
import axios from 'axios'
function App() {
  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    function onTaskAdd(input){
      let length = tasks.length+1;
      setTasks([...tasks, {id:length, title: input.title, description:input.description, isCompleted: false}]);
    }
    function onTaskClick(idTask){
      const newTasks = tasks.map((task)=>
      {
        if(task.id == idTask){
          return {...task, isCompleted: !task.isCompleted}
        }
        return task;
      }
      
      )
      setTasks(newTasks)
      }
      function onTaskDelete(idTask){
          const newTasks = tasks.filter(task=> task.id!==idTask)
          setTasks(newTasks)
      }
     
        useEffect(()=>
        async function chamarApi(){
          try{
            if(tasks.length === 0){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            setTasks(response.data)
                }
          } catch(error){
              console.log("esse e um erro :" + error)
          }
        } 
        ,[])
       
      useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }, [tasks])

     
  return (
    <>
     
        <h1>Gerenciador de Tarefas</h1>
        <AddTask onTaskAdd={onTaskAdd}/>

        <h2>Listagem das suas Tarefa Atualizadas</h2>
        <ListTask tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>
    </>
  )
}

export default App
