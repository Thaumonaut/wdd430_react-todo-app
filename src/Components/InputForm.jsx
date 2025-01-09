import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function InputForm({onSubmit}) {
  const [task, setTask] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault()
    if(task === "") return;
    onSubmit(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>Add Item to List</label>
      <input type='text' onChange={e => setTask(e.target.value)} value={task}></input>
      <button>Add</button>
    </form>
  )
}