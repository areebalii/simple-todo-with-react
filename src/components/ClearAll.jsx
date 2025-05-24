
function ClearAll({ todoTasks, setTodoTasks }) {
  // Clear All tasks funcnality
  const clearAll = todoTasks.length > 0 ? "Clear All" : "";
  const handleClearAllTasks = () => {
    setTodoTasks([]);
  }
  return (
    <div className='center'>
      {clearAll && <button onClick={handleClearAllTasks} className='clear-btn'>Clear All</button>}
    </div>
  )
}

export default ClearAll