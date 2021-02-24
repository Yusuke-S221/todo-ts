import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { Task } from './Types'
import 'App.css'

const initialState: Task[] = [
  {
    id: 2,
    title: 'aaa',
    done: false
  },{
    id: 1,
    title: 'aaa',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}