import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import DayList from './components/DayList/DayList';


function App() {

let [days, setDays] = useState([])
let [tasks, setTasks] = useState([])

const submit_form = event => {
  event.preventDefault()
  let { day, importance, description } = event.target;

  const newTask = {
      id: Date.now(),
      day: day.value,
      importance: importance.value,
      description: description.value
  }
  tasks = [...tasks, newTask].sort((a,b) => b.importance - a.importance)
  setTasks(tasks)

  if(!days.includes(day.value)){
    days = [...days, day.value]
  }
  days.sort((a,b) => a - b)
  setDays(days)

  event.target.day.value = ''
  event.target.importance.value = ''
  event.target.description.value = ''
}

const deleteDay = (day) =>{
  days = days.filter(elem => elem.id !== day)
  setDays(days)
}


const deleteTask = (id) => {
  tasks = tasks.filter(elem => elem.id !== id)
  setTasks(tasks);

  const days = []
      tasks.forEach(elem => {
          if(!days.includes(elem.day)){
              days.push(elem.day)
            }
        })
  setDays([...days])
}


const changeImportanceTask = (id) => {
  tasks = tasks.map(elem => {
    if(elem.id === id){
      elem.importance = elem.importance === '1' ? '0' : '1'
    }
    return elem
  })
  setTasks(tasks)
}



  return (
    <div className='app'>
      <div className='form_wrapper'>
        <Form submit_form={submit_form}/>

        <DayList days={days}
                 tasks={tasks}
                 deleteTask={deleteTask}
                 deleteDay={deleteDay}
                 changeImportanceTask={changeImportanceTask}
               />
      </div>
    </div>
  );
}

export default App;
