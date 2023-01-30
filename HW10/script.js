// 1.Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }


// function getKeys(someObj){
//     return Object.keys(someObj)
// }
// console.log(getKeys(someObj));

// Результат: ['key1','key2','key3','key4']


// 2.Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение.
// Пример: 
 
// numbers = [1,2,3,4,5]

// function getAvg(nums) {
//     return nums.reduce((a, b) => (a + b)) / nums.length;
// }

//   console.log(getAvg(numbers));

// Результат:3




// 3.Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’

// Пример: 
// array = [1,true,'3','value1',9,'key']

// function countString(array){
//     let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string')
//     count++;
//   }
//   console.log(`Количество элементов: ${count}`);
// }
// countString(array);

// Результат: 3


// 4.Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Примечание: Использовать класс Object нельзя
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// function getEntries(someObj){
//     return Object.entries(someObj)
// }
// console.log(getEntries(someObj))

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]


//5. Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

Пример: 
array = [1,true,'3','value1',9,'key']
const obj = Object.assign({}, array)

console.log(obj);


Не могу найти решения 

// Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }

