import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './store/cartReducer';
import { store } from './store';



function App(){


const items = useSelector(store => store)

const dispatch = useDispatch();

  return (
    <div className='cart'>
    {items.map(item => (
      <div key={item.id} className='cart_item'>
        {item.title} 
       <button onClick={() => dispatch(incrementAction(item.id))}>+</button>
       <p>{item.count}</p>
       <button onClick={() => dispatch(decrementAction(item.id))}>-</button>
        
      </div>
    ))}
  </div>
);

}
export default App ;
