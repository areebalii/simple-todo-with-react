import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [todoTasks, setTodoTasks] = useState([])
  const [dateTime, setDateTime] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return;
    // setTodoTasks([...todoTasks, inputValue])
    const ifTaskExist = inputValue.trim().toLowerCase();
    if (todoTasks.includes(ifTaskExist)) {
      alert("Task already exists")
    } else {
      setTodoTasks((prevTasks) => [...prevTasks, inputValue])
    }
    setInputValue("")
  }

  // Delete task functionality
  const handleDelete = (task) => {
    const updatedTask = todoTasks.filter((currTask) => currTask !== task)
    setTodoTasks(updatedTask)
  }

  // Clear All tasks funcnality
  const clearAll = todoTasks.length > 0 ? "Clear All" : "";
  const handleClearAllTasks = () => {
    setTodoTasks([]);
  }


  // Date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const currDate = now.toLocaleDateString()
      const currTime = now.toLocaleTimeString()

      setDateTime(`${currDate} - ${currTime}`)

    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <section className='todo-container'>
        <header>
          <h1>Todo List</h1>
          <h2>{dateTime}</h2>
        </header>
        <section className='form'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='todo-input' placeholder='Enter your task'
                autoComplete='off'
                required
              />
            </div>
            <div>
              <button type='submit' className='todo-btn'>Add Task</button>
            </div>
          </form>
        </section>
        <section className='myUnOrdList'>
          <ul>
            {todoTasks.map((task, index) => (
              <li key={index} className='todo-item'>
                <span>{task}</span>
                <button>Checked</button>
                <button onClick={() => handleDelete(task)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
        <div className='center'>
          {clearAll && <button onClick={handleClearAllTasks} className='clear-btn'>Clear All</button>}
        </div>
      </section>
    </>
  )
}

export default App
