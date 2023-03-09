
let slider_index = 0;

const sliderArray = [
    { caption: 'Бухгалтерские услуги <br> в Москве',
button_text: 'Наша презентация' },
    { caption: 'Бухгалтерские услуги <br> в Иваново',
button_text: 'Заказ услуг' },
    { caption: 'Бухгалтерские услуги <br> в Нижнем-Новгороде',
button_text: 'Консультация' },
    { caption: 'Бухгалтерские услуги <br> в Астрахани',
button_text: 'Оформление' },
  ];

const btn_head = document.querySelector('.btn_head');
const h1_item = document.querySelector('.h1_item');
const btn_prev= document.querySelector('.btn_prev');
const btn_next = document.querySelector('.btn_next');
const dots_array = document.querySelectorAll('.slaider_item')

btn_next.addEventListener('click', () => {
    slider_index++
    if(slider_index == sliderArray.length){
        slider_index = 0
    }
    h1_item.innerHTML = sliderArray[slider_index].caption
    colorDots(slider_index)
})

btn_prev.addEventListener('click', () => {
    slider_index--
    if(slider_index < 0){
        slider_index = sliderArray.length -1
    }
    h1_item.innerHTML = sliderArray[slider_index].caption
    colorDots(slider_index)
})


dots_array[0].style.backgroundColor='white';

function colorDots(slider_index){
    for( let i = 0; i < sliderArray.length; i++){
    if(i == slider_index){
        dots_array[slider_index].style.backgroundColor='white'
    }else {
        dots_array[i].style.backgroundColor='rgba(255,255,255, 0.4)'
    }
}}
    


let clients_dot_list = document.querySelectorAll('.client_dot')



// const images = document.querySelectorAll('.slaider_clients .slider_line img')
// const sliderLine = document.querySelector('.slider_line')

// let count = 0;
// let width;

// function init(){
//     width = document.querySelector('.slaider_clients').offsetWidth;
//     sliderLine.style.width = width * images.length + 'px';

//     images.forEach(item =>{
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     })
//     rollSlider()
// }
// window.addEventListener('resize', init);
// // init()

// document.querySelector('.btn_slider_next').addEventListener('click', function(){
//     count++
//     if (count >= images.length) {
//         count = 0
//     }
//     rollSlider()
// })

// document.querySelector('.btn_slider_prev').addEventListener('click', function () {
//     count--
//     if (count < 0) {
//         count = images.length-1
//     }
//     rollSlider()
// })

// function rollSlider() {
//     sliderLine.style.transform = 'translate(- ' + count * width + 'px)';
// }