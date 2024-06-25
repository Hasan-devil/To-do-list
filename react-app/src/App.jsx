import { useState } from 'react'
import ReactDom from 'react-dom'
import Nav from './Navbar.jsx'
import List from './Lists.jsx'
import Popup from './Popup.jsx'
function App() {
  const [toggle,setToggle] = useState( false )
  const [task,setTask] = useState()
  const [listItem, setListItem] = useState([]);
  const handleOpen = () => setToggle( true )
  const handleClose = () => setToggle( false )
      
  function handleList (task) {
    if (task.trim() === "") return;
      setTask(task)
      setListItem([...listItem,task])
      setTask("")
  }
  function removeTask(index){
    setListItem(listItem.filter((_,i) => index !== i))
  }
  return(
    <main className = "container vh-100">
    <div className = "container" >
    <Nav name="ToDo list" />
    <List task = { listItem } removeTask = {removeTask}/>
    <div className="container d-flex border-dark justify-content-end fixed-bottom p-3">
        <button className="btn-danger rounded-circle border-0 py-3 px-4" onClick={ handleOpen }>+</button>
    </div>
    </div>
    <Popup handleList = { handleList } trigger = { toggle } Close={ handleClose }/>
    </main>
  )
}
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)