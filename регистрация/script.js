let btnMen = document.getElementById('background_men')
let btnWomen = document.getElementById('background_women')

btnMen.addEventListener('click', function () {
    console.log('+')
    btnMen.style.background = 'linear-gradient(180deg, #60A9FF 0%, #3AE7FF 100%)'
    btnWomen.style.background = 'none'
})
btnWomen.addEventListener('click', function () {
    console.log('+')
    btnWomen.style.background = 'linear-gradient(180deg, #FF617D 0%, #9688E7 100%)'
    btnMen.style.background = 'none'
})


/*function change() {
    btnMen.style.background = 'linear-gradient(180deg, #60A9FF 0%, #3AE7FF 100%);'
}*/