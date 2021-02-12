import React from 'react'

const Task = ({value,editTask,deleteTask}) => {
    return (
        <>
            <li className="list-group-item">
                <span className="lead">{value.name}</span>
                <button 
                className="btn btn-danger btn-sm float-right"
                onClick={()=>deleteTask(value.id)}
                >
                Eliminar
                </button>
                <button 
                className="btn btn-warning  btn-sm float-right mx-2"
                onClick={editTask}
                >
                Editar
                </button>
            </li>    
        </>
    )
}

export default Task
