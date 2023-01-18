// 1) Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
// let elems = [
// '<div><p class="text">Home</p></div>', 
// '<div><p class="text">About</p></div>', 
// '<div><p class="text">FAQ</p></div>', 
// '<div><p class="text">Contacts</p></div>' 
// ] 

// for (let i in elems) {
//     elems[i] = elems[i].replaceAll('<div><p class="text">','').replaceAll('</p></div>','')
//          console.log(elems[i])
// }

// Результат: ['Home','About','FAQ','Contacts']


// 2) Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
//   let words = ['стакан','молоко','табуретка','вода'] 

// for (let word of words) {
//     word = word.charAt(0).toUpperCase() + word.substring(1);
//     console.log(word);
// }

// function initCap(array) {
// 	return array.map((el) => el.replace(el[0], el[0].toUpperCase()));
// }
// console.log(initCap(words));

// Результат: ['Cтакан','Молоко','Табуретка','Вода']




// Метод строки split(sep) - преобразовывает строку в массив по разделителю.
// let string = 'Привет мой друг'
// console.log(string.split(' '))


//3) Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

// Пример: 
let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
'Grant Laster', 
'Persius Master', 
'Lest' 
] 


const full_names = names.map(elem => {
    if (elem.includes(' ')) {
      return elem.split(' ');
    } else {
      return [elem, undefined];
    }
  }); 

console.log(full_names);

// Результат: [ 
// ['Steven','King'], 
// ['Jonh','Snow'], 
// ['Oliver', undefined], 
// ['Neena','Stich'], 
// ['Grant','Laster'], 
// ['Persius','Master'],
// ['Lest', undefined] ]
// ]
