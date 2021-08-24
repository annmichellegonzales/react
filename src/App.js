import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Monday',
        reminder: true
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      day: 'Monday',
      reminder: true
  },
  {
    id: 3,
    text: 'Doctors Appointment',
    day: 'Monday',
    reminder: true
}
])

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
