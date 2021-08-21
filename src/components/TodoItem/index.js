import './index.css'

const TodoItem = props => {
  const {todoDetail, deleteTodo} = props
  const {id, title} = todoDetail
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="todo-text">{title}</p>
      <button className="delete-button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
