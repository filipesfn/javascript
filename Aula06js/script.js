// let perguntas = [
//     "Telefonou para a vitima?",
//     "Esteve no local do crime?",
//     "Mora perto da vítima?",
//     "Devia para a vitima?",
//     "Já trabalhou com a vitima?",
// ]


// let classificacao = ""
// letQuantidadeDeSim = 0
// console.log(perguntas.length)

// for(let i=0; i < perguntas.length; i++){
//     let pergunta = prompt(perguntas[i])
//     while(resposta!='sim' && resposta!='nao'){
//         alert("Por favor, digite sim ou nao")
//         resposta = prompt('Responda sim ou nao \n'+perguntas[i])
//     }
//     alert("OK")

//     if(resposta =="sim"){
//         QuantidadeDeSim++
//     }
// }

// if(QuantidadeDeSim==2){
//     classificacao='Suspeito'
// }else if(QuantidadeDeSim==3 || QuantidadeDeSim==4){
//     classificacao='Cúmplice'
// }else if(QuantidadeDeSim==5){
//     classificacao='Assassino'
// }else{
//     classificacao='Inocente'
// }

// alert("Você foi classificado com "+classificacao)





// let numero1 = Number(prompt("Digite um número: "))
// let numero2 = Number(prompt("Digite outro número: "))

// let soma1 = numero1+numero2

// alert(soma1)

// let numero3 = Number(prompt("Digite um número: "))
// let numero4 = Number(prompt("Digite outro número: "))

// soma2= numero3+numero4

// alert(soma2)

// let numero5 = Number(prompt("Digite um número: "))
// let numero6 = Number(prompt("Digite outro número: "))

// soma3= numero5+numero6

// alert(soma3)


// function dizerOláMundo(){
//     console.log("Olá mundo!")
//     console.log("Essa é a minha primeira função")
// }

// dizerOláMundo()
// dizerOláMundo()
// dizerOláMundo()
// dizerOláMundo()


// function calcular2numeros(){
//     let numero1 = Number(prompt("Digite um numero: "))
//     let numero2 = Number(prompt("Digite outro numero: "))
//     let resultado = numero1 + numero2
    
//     alert(calcular2numeros)
// }

// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()
// calcular2NUmeros()


// function some2numeros(){
//     let numero1 = Number(prompt("Digite um numero: "))
//     let numero2 = Number(prompt("Digite outro numero: "))
//     let resultado = numero1 + numero2
    
//     alert(resultado)
// }

// function subtraia2numeros(){
//     let numero1 = Number(prompt("Digite um numero: "))
//     let numero2 = Number(prompt("Digite outro numero: "))
//     let resultado = numero1 - numero2
    
//     alert(resultado)
// }


// function divida2numeros(){
//     let numero1 = Number(prompt("Digite um numero: "))
//     let numero2 = Number(prompt("Digite outro numero: "))
//     let resultado = numero1 / numero2
    
//     alert(resultado)
// }

// function multiplique2numeros(){
//     let numero1 = Number(prompt("Digite um numero: "))
//     let numero2 = Number(prompt("Digite outro numero: "))
//     let resultado = numero1 * numero2
    
//     alert(resultado)
// }

// some2numeros()
// subtraia2numeros()
// divida2numeros()
// multiplique2numeros()


function somar(){
    let resultado =numero1+numero2
    alert(resultado)
}

function subtrair(){
    let resultado =numero1-numero2
    alert(resultado)
}

function multiplicar(){
    let resultado =numero1*numero2
    alert(resultado)
}

function dividir(){
    let resultado =numero1/numero2
    alert(resultado)
}

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

let operacao = Number(prompt(`Operacoes\n
     1-Soma\n 
     2-Subtração\n 
     3-Multiplicacao\n
     4-Divisao
`))

switch (operacao) {
    case 1:
        somar()
        break;
    case 2:
        subtrair()
        break;
    case 3:
        multiplicar()
        break;
    case 4:
        dividir()
        break;

    default:
        break;
}