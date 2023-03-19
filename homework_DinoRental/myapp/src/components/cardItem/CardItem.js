import s from './CardItem.module.css'

function CardItem(props) {
  return (
    <div className={s.items}
        style={{backgroundColor : `${props.background}`}}>

        <h2 className={s.items_text}>{props.text}</h2>
    </div>
  )
}
export default CardItem