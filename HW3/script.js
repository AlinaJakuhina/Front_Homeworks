// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.

// let newParag = document.createElement('p');
// newParag.innerText = "Hello from Spain, here is good life.";

// let btn = document.createElement('button');
// btn.innerText = "Click me";

// document.body.append(newParag);
// document.body.append(btn);

// newParag.style.color = "red";
// newParag.style.marginLeft = "40px";
// newParag.style.marginTop = "40px";
// btn.style.borderRadius = "30px";
// btn.style.backgroundColor = "green";
// btn.style.color = "white";
// btn.style.marginLeft = "50px";

// btn.onclick = () => {
//     newParag.style.opacity = newParag.style.opacity === '0' ? '1' : '0';
// };

//2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.

// let colorsArr = ['yellow', 'red', 'green', 'blue', 'violet',];

// let divColors = document.createElement('div');
// let colorsP = document.createElement('p');
// colorsP.innerText = "Change color!!";
// colorsP.style.marginLeft = '80px';


// let colorList = document.createElement('ul');

// for (let _color of colorsArr) {
//    let col_btn = document.createElement('button');
//    col_btn.style.height = '70px';
//    col_btn.style.width = '40px';
//    col_btn.style.display = 'inline-block';
   
//     col_btn.onclick = () => {
// 		document.body.style.backgroundColor = document.body.style.backgroundColor === _color ? 'white' : _color;
// 	};
//     colorList.append(col_btn);
// }

// document.body.append(divColors, colorsP);
// divColors.append(colorList);

//3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.

// const favoriteFilms = [
// { 
// title:"Avatar",
// info:"Fantastic",
// year: 2009,
// },

// { 
// title:"Titanic",
// info:"Dramma",
// year: 1997,
// },

// { 
// title:"Prestige",
// info:"Misterio",
// year: 2006
// }
// ]

// for (let names of favoriteFilms){
//   let h = document.createElement("h2"); 
//   h.innerText = names.title;

// let p = document.createElement("p"); 
// p.innerText = names.year;
// p.classList.add("hide");

// document.body.append(h, p);

// h.addEventListener("click" , () => {
//    if (p.classList.contains("show")){
//        p.classList.replace("show", "hide");
//    }else {
//        p.classList.replace("hide", "show");
//    }
// }
// )
// }

// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).

// let keyBoardButton = 
// ["q","w","e","r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "!"]


// for (let i =0; i<keyBoardButton.length; i++){
//     let btn = document.createElement('button');
//     btn.innerText = keyBoardButton[i];
//     btn.style.cssText = 'margin: 5px; padding: 8px 8px; heigh:80px; background-color: yellow; font-size:27px; width: 50px; height: 50px; border-radius:10px';

//     document.body.appendChild(btn);
// }

// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

let keyBoardButton = ["q","w","e","r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "!"]

for (let i =0; i<keyBoardButton.length; i++){
      let btn = document.createElement('button');
      btn.innerText = keyBoardButton[i];
       btn.style.cssText = 'margin: 5px; padding: 8px 8px; heigh:80px; background-color: yellow; font-size:27px; width: 50px; height: 50px; border-radius:10px';
  
       document.body.appendChild(btn);
btn.onclick = () => { 
p.innerText = p.textContent + btn.textContent;
}
}
let p = document.createElement('p');
p.style.cssText = 'margin: 50px; color: black; backgrond-color: yellow; border: 1px solid black; font-size:30px';

document.body.appendChild(p); 