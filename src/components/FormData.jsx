function FormData({ todoTasks, setTodoTasks }) {
  // Delete task functionality
  const handleDelete = (task) => {
    const updatedTask = todoTasks.filter((currTask) => currTask !== task)
    setTodoTasks(updatedTask)
  }
  return (
    <ul>
      {todoTasks.map((task, index) => (
        <li key={index} className='todo-item'>
          <span>{task}</span>
          <button>Checked</button>
          <button onClick={() => handleDelete(task)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default FormData