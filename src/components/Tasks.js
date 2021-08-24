import React from 'react'


const Tasks = ({ tasks }) => {
    return (
        <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )

}



// const Tasks = ({ tasks, onDelete, onToggle }) => {
//     return (
//       <>
//         {tasks.map((task, index) => (
//           <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
//         ))}
//       </>
//     )
//   }

export default Tasks
