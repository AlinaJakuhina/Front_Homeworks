import s from './TodoList.module.css'



function TodoList({ id, importance, description, deleteTask, changeImportanceTask }) {

  const style = {backgroundColor: importance === '0' ? '#E74C3C' : '#1ABC9C'}
    
  return (
    <div className={s.todo_wrapper}
         style={style}
         onDoubleClick={() => changeImportanceTask(id)}>
        {description}
        <button className={s.close_btn} onClick={() => deleteTask(id)}>x</button>
        
    </div>
  )
}
export default TodoList