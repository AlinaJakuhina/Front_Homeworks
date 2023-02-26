const div_elem = document.querySelector('.root');
const triggers = document.createElement('div');
const container = document.createElement('div');

const left_btn = document.createElement('button');
const right_btn = document.createElement('button');

left_btn.innerText = '<---';
right_btn.innerText = '--->';

triggers.className = 'trigger';
container.className = 'container';

triggers.append(left_btn,right_btn);
div_elem.append(triggers ,container);



function fetchProducts(id){
    let url = (`https://dummyjson.com/products/${id}`)
    fetch(url)
    .then(Response => Response.json())
    .then(data => render(data))
}


function render(data){
    container.innerHTML = '';

    const avatar = document.createElement('img');
    const title_elem = document.createElement('h1');
    const price_elem = document.createElement('p');
    

    avatar.src = data.images[0];
    title_elem.innerText = `Title: ${data.title}`;
    price_elem.innerText = `Price: ${data.price} $`;

    container.append(avatar,title_elem,price_elem , raiting(data.raiting));
}



function raiting(n){
    let stars = Math.round(n)
    let elem_raiting = document.createElement('div')
    elem_raiting.className = 'elem_raiting';

    for( let i = 0; i < 5; i++){
        let span_elem = document.createElement('span')
        if(stars > i){
            span_elem.className = 'fa fa-star active'
        } else {
            span_elem.className = 'fa fa-star'
        }
        elem_raiting.append(span_elem)
    }
    return elem_raiting
}




let queue = 1
fetchProducts(queue)


right_btn.addEventListener('click', () => {
    if (queue != 30){
        fetchProducts(++queue)
    }
})

left_btn.addEventListener('click', () => {
    if (queue != 1){
        fetchProducts(--queue)
    }
})