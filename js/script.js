window.onload = function(){
    var elements  = document.getElementsByClassName('plus');
    console.log(elements)
    var elementsMin  = document.getElementsByClassName('minus');
    for (let item of elements) {
        item.addEventListener('click', ()=> {
            if(Number(item.previousElementSibling.innerText) < 10)
                item.previousElementSibling.innerText = Number(item.previousElementSibling.innerText) + 1
        })
    }
    for (let item of elementsMin) {
        item.addEventListener('click', ()=> {
            if(Number(item.nextElementSibling.innerText) >1)
                item.nextElementSibling.innerText = Number(item.nextElementSibling.innerText) - 1
        })
    }
}