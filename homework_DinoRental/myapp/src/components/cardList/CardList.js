import CardItem from '../cardItem/CardItem'
import s from './CardList.module.css'


function CardList() {
  return (
    <div className ={s.cardlist}>
        <CardItem text={"Годовое ТО"} background={"#22356F"}/>
        <CardItem text={"Выравнивание колес"} background={"#0052C1"}/>
        <CardItem text={"Настройка переключателей"} background={"#76B58B"}/>
    </div>
  )
}
export default CardList