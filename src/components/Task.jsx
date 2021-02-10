import React from 'react'

const Task = ({value}) => {
    return (
        <>
            <li className="list-group-item">
                <span className="lead">{value}</span>
                <button className="btn btn-danger btn-sm float-right">Eliminar</button>
                <button className="btn btn-warning  btn-sm float-right mx-2">Editar</button>
            </li>    
        </>
    )
}

export default Task
