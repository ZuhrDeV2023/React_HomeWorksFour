import React, { useState } from 'react'
// import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, newTask]);
    setNewTask('');
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <div className="box-list">
        <h1 className='list-title'>To-Do List in React</h1>
        <form className='box-form' onSubmit={handleSubmit}>
          <input className='formInp' placeholder='Iltimos ma`lumotlaringizni yozing' type="text" value={newTask} onChange={handleChange} />
          <button className='btnAdd' type="submit">Add Task</button>
        </form>
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              {task}
              <button className='btndelete' onClick={() => handleDelete(index)}>
                Delete Infomation
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
