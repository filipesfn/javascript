let $tecla0 = document.querySelector('#teclas > [data-number="0"]')
let $tecla1 = document.querySelector('#teclas > [data-number="1"]')
let $tecla2 = document.querySelector('#teclas > [data-number="2"]')
let $tecla3 = document.querySelector('#teclas > [data-number="3"]')
let $tecla4 = document.querySelector('#teclas > [data-number="4"]')
let $tecla5 = document.querySelector('#teclas > [data-number="5"]')
let $tecla6 = document.querySelector('#teclas > [data-number="6"]')
let $tecla7 = document.querySelector('#teclas > [data-number="7"]')
let $tecla8 = document.querySelector('#teclas > [data-number="8"]')
let $tecla9 = document.querySelector('#teclas > [data-number="9"]')

function zerarDisplay(){
  let $display = document.getElementById("display")
  console.log('oiii')
  $display.innerText="0"
}

let $teclace = document.getElementById("ce-key")



function calculo(event){
    let $elemento = event.target
    let number = Number($elemento.getAttribute("data-number"))
    let $display = document.getElementById("display")
    if ($display.innerText == '0') {
        $display.innerText = number
    } else{
        $display.innerText+= number
    }
} 

$tecla1.addEventListener('click', calculo)

$tecla2.addEventListener("click", calculo)

$tecla3.addEventListener("click", calculo)

$tecla4.addEventListener("click", calculo)

$tecla5.addEventListener("click", calculo)

$tecla6.addEventListener("click", calculo)

$tecla7.addEventListener("click", calculo)

$tecla8.addEventListener("click", calculo)

$tecla9.addEventListener("click", calculo)

$tecla0.addEventListener("click", calculo)

$teclace.addEventListener("click", zerarDisplay)
  
