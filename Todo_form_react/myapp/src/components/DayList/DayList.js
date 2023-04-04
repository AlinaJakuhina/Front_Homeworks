import s from './DayList.module.css'
import DayItem from '../DayItem/DayItem'

function DayList({ days, tasks, deleteDay, deleteTask, changeImportanceTask }) {


  days.sort((a,b) => +b.day - +a.day)

  return (
    <div className={s.dayList}>

        {days.map((elem, index) => <DayItem key={index}
                                        day={elem} 
                                        tasks={tasks} 
                                        deleteDay={deleteDay}
                                        dayIndex={elem}
                                        deleteTask={deleteTask}
                                        changeImportanceTask={changeImportanceTask}/>)}
    </div>
  )
}

export default DayList