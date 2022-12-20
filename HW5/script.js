let offset = 0;

const sl_line = document.querySelector('.sl_line');

document.querySelector('.btn_next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sl_line.style.left = -offset + 'px';
});

document.querySelector('.btn-prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sl_line.style.left = -offset + 'px';
});


