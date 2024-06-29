
// console.log("olá")
// for(let i=0; i<10; i++){
//     if(i==5){
//         continue
//     }

//     if(i==8){
//         break
//     }
//     console.log("Um ciclo se passou")
//     console.log(`i=${i}`)
// }



// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }


// }

// let texto = prompt("Digite um texto: ")
// const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêôûÂÊÔãõÃÕ"

// for(character of texto){
//     if(vogais.includes(character)){
//         continue
//     }
//     console.log(character)
// }


// let contador = 0
// for(let i=31; i<=500; i++){
//     if(i%7===0){
//         contador++
        
//         if (contador == 4) {
//             console.log(i)
//             break
//         }
//     }

   
// }

todos=[]
numerospares = []
numerosimpares = []
for (let i=0; i<=19; i++){
    let numero = prompt("Digite 20 numeros: ")
    todos.push(numero)
    if(i%2===0){
        numerospares.push(numero)
        console.log(i)
    }
    else{}
        numerosimpares.push(numero)
        console.log(i)
        console.log(numero)
}







