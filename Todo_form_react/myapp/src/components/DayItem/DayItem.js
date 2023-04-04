import TodoList from '../TodoList/TodoList'
import s from './DayItem.module.css'



function DayItem({day, tasks , index,deleteTask, deleteDay, changeImportanceTask}) {

  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  
  return (
    <div className={s.item_container}>
         <div className={s.item_day}>
      <p>{week[day]}</p>
          </div>
       
     <div className={s.item_task}>
       {tasks.map((elem, index) => {
        if(elem.day === day){
          return <TodoList id={elem.id}
          importance={elem.importance}
          description={elem.description}
          key={index}
          deleteTask={deleteTask}
          changeImportanceTask={changeImportanceTask} />
        }
      })}
     </div>
     <button className={s.close_button} onClick={() => deleteDay(index)}>x</button>
   </div>
 )
}

export default DayItem