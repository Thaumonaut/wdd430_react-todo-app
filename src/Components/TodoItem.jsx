// eslint-disable-next-line react/prop-types
export function TodoItem({id, completed, title, onToggle, onDelete}) {
  return (
    <li key={id}>
      <div className="checkbox-wrapper-24">
          <input type="checkbox" name="check" id={id} checked={completed} onChange={e => onToggle(id, e.target.checked)}/>
        <label htmlFor={id}>
          <span></span>
          <p>{title}</p>
        </label>
      </div>
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  )
}