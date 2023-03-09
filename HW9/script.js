// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции


// function checkDate() {
//     const today = new Date();
//     const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//     const daysUntilMonthEnds = lastDayOfMonth.getDate() - today.getDate();
//     console.log(`До конца месяца осталось ${daysUntilMonthEnds}  дней.`);
// }
// checkDate();

// function checkDate(){
//     let dateNow = new Date()
//     let dateNext = new Date(dateNow.getFullYear(),dateNow.getMonth() + 1, 0)
//     // let result = (dateNext.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24)
//     let result = dateNext.getDate() - dateNow.getDate()
//     // console.log(Math.floor(result))
//     console.log(result)
// }

// checkDate()

// 2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// 1) Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// 2)Если пятница была вчера - “Пятница была вчера”
// 3)Если пятница будет завтра - “Завтра пятница!”
// 4)Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

// function isItFridayToday() {
//     const today = new Date();
//     const day = today.getDay();
  
//     if (day === 5) {
//       console.log("Сегодня пятница!");
//     } else if (day === 4) {
//       console.log("Пятница была вчера!");
//     } else if (day === 6) {
//       console.log("Завтра пятница!");
//     } else {
//       let daysUntilFriday = 5 - day;
//       console.log(`Пятница будет через ${daysUntilFriday} дня!`);
//     }
//   }
//   isItFridayToday()

// function isItFridayToday(){
//     let day = new Date().getDay()
//     let array = [
//         'Пятница будет через 5 дней', 
//         'Пятница будет через 4 дня', 
//         'Пятница будет через 3 дня', 
//         'Пятница будет через 2 дня',
//         'Завтра будет пятница!',
//         'Сегодня пятница!',
//         'Вчера была пятница!'
//     ]
//     console.log(array[day])
// }

// isItFridayToday()




// 3. Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:
// Пример:
// let prices = [ 
// 'Цена товара - 1200$', 
// 'Стоимость - 500$', 
// 'Цена не определена', '9999',
// 'Ценовая категория - больше 300$',
// 'Цена за услугу 500 EUR',
// ]

// function getInfo(prices) {
//   let startsPrice = 0;
//   let endsDollar = 0;
  
//   prices.forEach(price => {
//     if (price.startsWith("Цена")) {
//       startsPrice++;
//     }
//     if (price.endsWith("$")) {
//       endsDollar++;
//     }
//   });
//   return [startsPrice, endsDollar];
// }

// console.log(getInfo(prices));


// 4.  Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
// let arrays = [ 
// '89840959944 exampleonemain@mail.ru', 
// '+79840959933 forreason@yandex.net', 
// 'somemail@mail.ru', 
// '89840959900 example@gmil.ru', 
// '+79840959911', 
// 'grandthere@mail.ru',
// 'jetpackfor@gmail.ru',
//  '89840959922 some@yandex.com',
// ] 

// let phones = [];
// let emails = [];

// arrays.forEach(item => {
//   let matches = item.match(/\b\d{11}\b|\b\d{12}\b/);
//   if(matches) {
//     phones.push(matches[0]);
//   }
//   matches = item.match(/\S+@\S+\.\S+/);
//   if(matches) {
//     emails.push(matches[0]);
//   }
// });

// arrays.forEach( elem => {
//     let row = elem.split(' ')
//     if (row.length == 2){
//         phones.push(row[0])
//         emails.push(row[1])
//     } else {
//         if (elem.includes('@')){
//             emails.push(elem)
//         } else {
//             phones.push(elem)
//         }
//     }
// })

// console.log(phones);
// console.log(emails);

// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']



// 5.Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

// Пример:
// let phones = [ 
// '4000 0012 0056 9499', 
// '4000 0013 5456 7379', 
// '4000 0014 1456 9869', 
// '4000 0015 3466 7859', 
// '4000 0016 3556 6899', 
// '4000 0017 4456 4699'
// ]
	
// let encryptedCards = phones.map(phones => {
//     let firstFour = phones.substring(0, 4);
//     let lastFour = phones.substring(phones.length - 4);
//     return firstFour + "***" + lastFour;
//   });
// console.log(encryptedCards);
  

// phones = phones.map(elem => elem.replace(elem.slice(4,-4), '*'.repeat(5)))
// console.log(phones)

// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]


