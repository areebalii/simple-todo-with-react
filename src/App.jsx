import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import DateTime from './components/DateTime'
import Form from './components/Form'
import FormData from './components/FormData'
import ClearAll from './components/ClearAll'

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("todoTasks");
    if (list) {
      return JSON.parse(localStorage.getItem("todoTasks"));
    } else {
      return [];
    }
  }
  const [todoTasks, setTodoTasks] = useState(() => getLocalStorage());

  localStorage.setItem("todoTasks", JSON.stringify(todoTasks));

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("todoTasks") || [])
  // }, [todoTasks])


  return (
    <>
      <section className='todo-container'>

        <header>
          <Header />
          <DateTime />
        </header>

        <section className='form'>
          <Form todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
        </section>

        <section className='myUnOrdList'>
          <FormData todoTasks={todoTasks} setTodoTasks={setTodoTasks} />
        </section>
        <ClearAll todoTasks={todoTasks} setTodoTasks={setTodoTasks} />


      </section>
    </>
  )
}

export default App
