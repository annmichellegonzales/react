import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState ([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Monday',
            reminder: true
        }
    ])


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
