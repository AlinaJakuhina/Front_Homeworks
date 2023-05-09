
const defaultState = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
 ]

 const INCREMENT ='INCREMENT'
 const DECREMENT = 'DECREMENT'
 

 export const cartReducer = (state = defaultState, action) => {
    const newState = [...state]
    const itemProduct = newState.find(item => item.id === action.payload)
    switch (action.type) {
        case 'INCREMENT':
            if ( itemProduct.count < 25){
                itemProduct.count++;
            }
            return newState 
           
        case 'DECREMENT':
            if ( itemProduct.count > 0){
                itemProduct.count--;
            }
            return newState 
        default:
              return state;
          }
        };

 export const incrementAction = (payload) => ({type: INCREMENT, payload})
 export const decrementAction = (payload) => ({type: DECREMENT, payload})