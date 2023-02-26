const rootElem = document.querySelector('.root');



function render(data){
    rootElem.innerHTML = '';

    const elem_container = document.createElement('div')
    elem_container.className = 'container';
    rootElem.append(elem_container);

    for( let elem of data){
        const elem_item  = document.createElement('div')
        elem_item.className = 'item';

        let avatar = document.createElement('img')
        let title = document.createElement('p')
        let price = document.createElement('p')

        let x_mark = document.createElement('i')
        x_mark.className = 'las la-times pos'

        x_mark.onclick = (e) => {
            e.stopPropagation()
            data = data.filter(value => value.id != elem.id)
            localStorage.setItem('products', JSON.stringify(data))
            render(data)
        }

    avatar.src = elem.images[0]
    title.innerText = `Title: ${elem.title}`;
    price.innerText = `Price: ${elem.price} $`;

    elem_item.append(avatar, title, price, raiting(data.raiting))
    elem_container.append(elem_item)
}
}


fetchProductsList(4)

function fetchProductsList(){
    let url = "https://dummyjson.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data.products))
            render(data.products)
        })
    }

function raiting(n){
    let count_stars = Math.round(n)
    let div_rating = document.createElement('div')
    div_rating.className = 'div_rating'
    
    for (let i = 0; i < 5; i++){
        let span_elem = document.createElement('span')
        if (count_stars > i){
            span_elem.className = 'fa fa-star active';
        } else {
            span_elem.className = 'fa fa-star';
        }
        div_rating.append(span_elem)
    }
    return div_rating
}