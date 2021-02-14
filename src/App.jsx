import React,{useState,useEffect} from 'react'
import { addDocument, getCollection, updateDocument } from './actions'
import Task from './components/Task'

function App() {
  // TODO: Correction of method update
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState(null)
  const [id, setId] = useState('')
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    (async()=>{
      const result = await getCollection("tasks")
      if (result.statusResponse) {
        setTasks(result.data)
      }
    })()
  }, [])
  
  const handleOnChange = (text) =>{
    setTask(text.target.value)
  }
  
  const handleOnSubmit = async(event) =>{
    event.preventDefault()
    if (!validateForm()) {
      return
    }
    const result = await addDocument("tasks",{name : task})
    if (!result.statusResponse) {
      setError(result.error)
      return
    }
    setTasks([...tasks,{id: result.data.id,name:task}])
    setTask("")
  }
  
  const handleSaveTask = async(event)=>{
    event.preventDefault()
    task === ""? console.log("Is empty") : setTask("");

    const result = await updateDocument("tasks",id,{name:task})
    if (!result.statusResponse) {
      setError(result.error)
      return
    }
    const editedTasks = tasks.map((item)=>item.id === id ? {id, name :task}:item)
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }

  const handleDeleteTask = (id) =>{
    
    const deleteItem = tasks.filter(task => task.id !== id)
    setTasks(deleteItem)
    // deleteItem.map(v=>console.log(v));
  }

  const validateForm = () =>{
    setError(null)
    let isValid = true
    if(task === ""){
      setError("Debes ingresar una tarea") 
      isValid = false
    }
    return isValid
  }

  const handleEditTask = (theTask) =>{
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
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
          </ul>:<li className="list-group-item">No hay tareas</li>
          }
          
        </div>
        <div className="col-4">
            <h4 className="text-center">
              {
              // console.log(task)
                editMode? "Modificar tarea":"Agregar tarea"
              }
            </h4>
          <form onSubmit={editMode === true? handleSaveTask : handleOnSubmit}>
            <input 
            className="form-control mb-2" 
            placeholder="ingrese la tarea..." 
            type="text" name="" id=""
            onChange={handleOnChange}
            value={task}
            />
            {
              error && <span className="text-danger">{error}</span>
            }
            <button className={
              editMode  === true?
              "btn btn-warning btn-block":
              "btn btn-dark btn-block"} 
            type="submit"
            >{editMode  === true? "Guardar":"Agregar"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
