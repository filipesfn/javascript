// let numero = Number(prompt("Digite um número de um 1 a 7: "))

// if(numero<1 || numero>7){
//     alert("Digite um numero entre 1 e 7!")
// }else{
//     switch(numero){
//         case 1:
//             alert("Hoje é domingo")
//             break
//         case 2:
//             alert("Hoje é segunda-feira")
//             break
//         case 3:
//             alert("Hoje é terça feira")
//             break
//         case 4:
//             alert("Hoje é quarta")
//             break
//         case 5:
//             alert("Hoje é quinta-feira")
//             break
//         case 6:
//             alert("Hoje é sexta-feira")
//             break
//         case 7:
//             alert("Hoje é sábado")
//             break        
//     }


// }

// let numero1 = Number(prompt("Digite um numero:"))

// let numero2 = Number(prompt("Digite outro numero: "))

// let opcao = Number(prompt("Escolha uma operação aritmética:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão "))


//     switch(opcao){
//         default:
//             alert("Digite um número entre 1 e 4!")
//             break
//         case 1:
//             let(numero1 + numero2)
//             alert("Soma:\n $(numero1)+$(numero2)=${soma}")
//             break
//         case 2:
//             alert(numero1 - numero2)
//             break
//         case 3:
//             alert(numero1 * numero2)
//             break
//         case 4:
//             alert(numero1 / numero2)
//             break
                    
//     }



// let contador = 0;

// while (contador<10) {
//     console.log("Mais um ciclo!")
//     console.log("valor do contador="+contador)

//     contador++
// }




// let numero = Number(prompt("Digite um número: "))
// while (numero>0){
//     console.log("Menos um ciclo")
//     console.log("Valor do numero="+numero)

//     numero--
// }





// let contador = 1
// let acumulador = 0
// while (contador<=50) {
//     acumulador = acumulador + contador

//     console.log("contador="+contador)
//     console.log("acumulador="+acumulador)
    
//     contador++
// }

// console.log("RESULTADO FINAL")
// console.log(acumulador)





let contador = 0
let soma = 0
while (contador<51){
    console.log(`Contador  = ${contador}`);
    console.log(`Soma  = ${soma+=contador}`);
    
    

    contador+=1
    
}
