function FormData({ todoTasks, setTodoTasks }) {
  // Delete task functionality
  const handleDelete = (id) => {
    const updatedTask = todoTasks.filter((task) => task.id !== id)
    setTodoTasks(updatedTask)
  }
  localStorage.setItem("todoTasks", JSON.stringify(todoTasks));

  const handleCheckbox = (id) => {
    const updatedTask = todoTasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
    setTodoTasks(updatedTask)
    // console.log("Task Completed", updatedTask.content);
  }

  return (
    <ul>
      {todoTasks.map((task) => (
        <li key={task.id} className='todo-item' style={{ backgroundColor: task.isCompleted ? "lightgreen" : "white", transition: "background-color 0.2s ease-in-out" }}>

          <span style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>{task.content}</span>

          <button onClick={() => handleCheckbox(task.id)}>{task.isCompleted ? "Undo" : "Complete"}</button>
          
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default FormData 