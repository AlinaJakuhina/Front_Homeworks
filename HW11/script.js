// 1.В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде массива. Результат выведите в консоль. Пример значений переменных:
// let order = { 
// productName: "Велосипед", 
// costomerName: "Саша", 
// salesName: "Петя", 
// totalPrice: 15000 
// } 

// let descriptor = Object.getOwnPropertyDescriptor(order, "totalPrice");
// console.log([['value', descriptor.value], ['writable', descriptor.writable], ['enumerable', descriptor.enumerable], ['configurable', descriptor.configurable]]);

// Пример результата: 
// [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]


// 2.В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны. Пример значений переменных:
// let employees = { 
// firstName: "Петя", 
// lastName: "Иванов", 
// ratePerDay: 2500, 
// workingDays: 5, 
// getSalary() { console.log(employees.ratePerDay * employees.workingDays )} } 

// let names = [];
// for ( let key in employees){
//     if( typeof employees[key] !== 'function'){
//         names.push(key);
//     }
// }
// console.log(names.join(', '));
// Пример результата: firstName, lastName, ratePerDay, workingDays



// 3.В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName. 
// Пример значений переменных: 

// let name = "Pizza" 
// let phone = "81234567890" 

// class Delivery {
//     constructor(name, phone, validPhone){
//         this.name = name;
//         this.phone = phone;
//         this.validPhone = Boolean;
//         if(validPhone === '+'){
//             console.log(true)
//         }else {
//             console.log(false)
//         }
//     }
// }
// let deliveryName = new Delivery(name, phone);

// Пример результата: false




// 4.В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


// Входные данные:
// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }

// class User extends Permissions {
//     constructor(name){
//         super()
//         this.name = name
//     }
// }
