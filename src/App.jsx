import { useEffect, useState } from 'react'
import './App.css'
import Input from './Input'
import TodoList from './TodoList'

const localCache = () => {
  const list = localStorage.getItem("todos")
  if (list) {
    return JSON.parse(localStorage.getItem("todos"))
  } else {
    return []
  }
}

function App() {
  const [todoInput, settodoinput] = useState("")
  const [items, setitems] = useState(localCache)
  function handleInput() {
    if (!todoInput) {
      // empty
    } else {
      settodoinput('')
      setitems([...items, todoInput])
    }
  }

  function removeItem(idx){
    const updateItems = items.filter((elm,id)=>id !== idx)
    setitems(updateItems)
  }
  function removeLocalStorage(){
    localStorage.removeItem("todos")
    setitems([])
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items))
  }, [items])
  return (
    <>
      <div className='contianer'>
        <h1 className='heading_todo'>Make your Todo List</h1>
        <Input onSubmit={handleInput} value={todoInput} onChange={(e) => settodoinput(e.target.value)} onClick={handleInput} />
        <ul className='todo_list-container'>
          {items.map((val,idx)=>{
            return (<TodoList key={idx} text={val} removeItem={()=>removeItem(idx)}  />)
          })}
        </ul>
        <button className='remove' onClick={removeLocalStorage}>Remove all</button>
      </div>
    </>
  )
}

export default App
