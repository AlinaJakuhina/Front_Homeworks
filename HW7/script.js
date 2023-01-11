// First level: Прочитать следующие темы:
// 1)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/forEach 
// 2)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/GlobalObjects/Array/Reduce 
// 3)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

// 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"

// let array1 = [1, 2, 3, 4, 5];
// let string = array1.toString(',');
// console.log(string);

// 2)Используя метод reduce, посчитайте сколько людей проголосовали.

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function total(array) {
//     return array.reduce(function(count, voter) {
//         return count + voter.voted;
//     }, 0);
// }
// console.log(total(voters));

// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const total_price = wishlist.reduce(function(sum, elem){
//     return sum + elem.price;
// }, 0);
// console.log(total_price);

// 4) Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, avgmark. Avgmark содержит среднеарифметическое значение marks.
// Массив для задачи:

// const products = [
//     {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
//     {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
//     {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
//     {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] }
// ];

// products.forEach((element) => {
//      element.avgmarks = element.marks.reduce((acc, current) => acc + current);
//          delete element.marks;
//      });
//      console.log(products);

