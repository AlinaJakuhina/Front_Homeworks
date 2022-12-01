// Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.

let imgFood = [
    {
    name: 'Sushi',
    photo:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQOgcbFxEKPBTK8gxvgXe5wxz28Rox4gIpQ&usqp=CAU.jpg'
    },
    {
        name: 'Fastfood',
        photo:
   'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.krym-eda.ru%2FRywuYKw84a-WMnuhNNhbAObVfBM%3D%2F600x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Ff38a2d97-6158-40ef-b59a-fa2484b1e03b%2F091ac0738640493e79d5c0577b8865c8.jpg&imgrefurl=https%3A%2F%2Fxn----8sbldxm1a2g.xn--p1ai%2F&tbnid=yQXCMwMqTMVF2M&vet=12ahUKEwilx93Pp8z7AhVdrycCHVPgDW8QMyg6egQIARBH..i&docid=uPDVmD_zx8KUWM&w=600&h=401&q=картинки%20еда&client=safari&ved=2ahUKEwilx93Pp8z7AhVdrycCHVPgDW8QMyg6egQIARBH.jpg'
    },
    { 
        name:'Sweets',
        photo:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUuPCvaDkvLIDp0wVwwsb_93G1GGkzMf7rA&usqp=CAU.jpg'
    },
]

const div = document.createElement('div');
const divBox = document.createElement('div');

for(let i = 0; i < imgFood.length; i++){
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');

    newImg.classList.add('img');
    div.classList.add('div');
    newImg.setAttribute('src', imgFood[i]);

    newDiv.append(newImg);
    div.append(newDiv);
    document.body.append(div);

    newImg.onclick = () => {
        const bootom_div = document.createElement('div');
        const img_bottom = document.createElement('img');
       
        img_bottom.setAttribute('src', imgFood[i]);
        divBox.classList.add('divBox');
        img_bottom.classList.add('img_bottom');
         
        bootom_div.append(img_bottom);
        divBox.append(bootom_div);
        document.body.append(divBox);
       }
}
