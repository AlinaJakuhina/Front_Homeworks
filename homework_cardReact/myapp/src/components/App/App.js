import { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import s from './App.module.css'

function App() {

    const data = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 1}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
        ]

        let [card, setCards] = useState(data)

        const addNewCard = () => {
            let newCards = {
                id: Date.now(),
                name: prompt('Введите товар'),
                price: prompt('Введите цену товара'),
                count: prompt('Количество товара')
            }
            setCards([...card, newCards])
        }
        
        const incrementCount = (id) =>{
            // console.log(id)
           let newCard = card.map(el => {
                if (el.id == id){
                    el.count++
                }
                return el
            }
            )
        setCards(newCard)}

        const decrementCount = (id) =>{
            let newCard = card.map(el => {
                if (el.id == id){
                    if (el.count > 0){
                        el.count--
                    }
                }
                return el
            })
            setCards(newCard)
        }

        const deleteCardById = (id) =>{
            let newCards = card.filter(elem => (elem.id != id))
            setCards(newCards)
        }

  return (
    <div>
        <button className={s.btn_app} onClick={addNewCard}>ADD CARD</button>
        {
            card.map(el => <ProductItem key={el.id} {...el} incrementCount={incrementCount} decrementCount={decrementCount} deleteCardById={deleteCardById}/>) 
        }
        
    </div>
  )
}
export default App