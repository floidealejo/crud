import React,{useState} from 'react'
import shortid from 'shortid'
import Task from './components/Task'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleOnChange = (text) =>{
    setTask(text.target.value)
  }
  
  const handleOnSubmit = (event) =>{
    event.preventDefault()
    task === ""? console.log("Is empty") : setTask("");
    const newTask = {
      id: shortid.generate(),
      name: task,
    }
    setTasks([...tasks,newTask])
    setTask("")
  }

  const handleDeleteTask = (id) =>{
    
    const deleteItem = tasks.filter(task => task.id !== id)
    setTasks(deleteItem)
    // deleteItem.map(v=>console.log(v));
  }

  const handleEditTask = () =>{
    console.log("Quiero editar");
  }
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className ="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          {
          tasks.length !== 0 ?
          <ul className="list-group">
            {
              tasks.map((task)=>{
                return(
                <Task 
                key={task.id} 
                value={task} 
                editTask={handleEditTask}
                deleteTask={handleDeleteTask}
                />
              )
            })
            }
          </ul>:<h5>No hy tareas</h5>
          }
          
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={handleOnSubmit}>
            <input 
            className="form-control mb-2" 
            placeholder="ingrese la tarea..." 
            type="text" name="" id=""
            onChange={handleOnChange}
            value={task}
            />
            <button className="btn btn-dark btn-block" 
            type="submit"
            >Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
