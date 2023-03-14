
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
    
// ----------------

let slideWidth = 1110
sliderCount = 0

let clientsSliderList = document.querySelectorAll('.slaider_clients')
  
let clients_line = document.querySelector('.slider_line')
let clients_btn_next = document.querySelector('.b_slider_prev')
let clients_btn_prev = document.querySelector('.b_slider_next')

let clients_dotList = document.querySelectorAll('.client_dot')
let clients_dot_color = 'rgba(0, 95, 163, .4)'
let clients_dot_active_color = 'rgba(0, 95, 163, 1)'



function changeSlide(dotList, slider_line, btn_next, btn_prev, dot_color, dot_active_color) {
    for (let i = 0; i < 4; i++) {
      dotList[i].addEventListener('click', () => {
        sliderCount = i
        setDot(i)
        slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
      })
    }
  
    btn_next.addEventListener('click', go_right)
    btn_prev.addEventListener('click', go_left)
  
    function go_right() {
      sliderCount++
      if (sliderCount >= 4) {
        sliderCount = 0
      }
      slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
      setDot(sliderCount)
    }
  

    function go_left() {
      sliderCount--
      if (sliderCount < 0) {
        sliderCount = 3
      }
      slider_line.style.transform = `translateX(${-1 * slideWidth * sliderCount}px)`
      setDot(sliderCount)
    }
  
    function setDot(sliderCount) {
      for (let i = 0; i < 4; i++) {
        dotList[i].style.background = dot_color
      }
      dotList[sliderCount].style.background = dot_active_color
    }
  }


  changeSlide(clients_dotList, clients_line, clients_btn_next, clients_btn_prev, clients_dot_color, clients_dot_active_color)
  // ===================================================================

  
  

  


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