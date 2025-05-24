import { useState } from 'react'

function Form({ todoTasks, setTodoTasks }) {
  const [inputValue, setInputValue] = useState("")


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

  return (
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
  )
}

export default Form