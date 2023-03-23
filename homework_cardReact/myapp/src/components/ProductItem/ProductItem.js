import s from './ProductItem.module.css'

function ProductItem(props) {

    const { id, name, price, count, incrementCount, decrementCount, deleteCardById} = props
        
  return (
    <div className={s.card} onDoubleClick={()=>deleteCardById(id)}>
        <div className={s.card_title}>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>

        <div className={s.btn_item}>
            <button onClick={()=>incrementCount(id)}>+</button>
            <button>{count}</button>
            <button onClick={()=>decrementCount(id)}>-</button>
        </div>

    </div>
  )
}
export default ProductItem