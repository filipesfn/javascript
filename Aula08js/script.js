// Transforma a função abaixo em uma função anônima
//function addNumeros(a,b){
//    return a+b
//}
// Transforma a função abaixo em uma arrowfunction
//function subtrairNumeros(a,b){
//    return a-b
//}


//let soma = addNumeros(1,2)
//let subtracao = subtrairNumeros(5,4)

//console.log(soma)
//console.log(subtracao)

//let addNumeros = function (a,b){
//    return a+b
//}
    
//let subtrairNumeros = (a, b) => {
//    return a - b;
//};

//Transforme a função abaixo em uma 
// função anônima
//function multiplicarNumeros(a,b){
//    return a*b
//}

//Transforme a função abaixo em uma 
// arrow function
//function dividirNumeros(a,b){
//    return a/b
//}



//let multiplicarNumeros = function(a,b){
//    return a*b
//}

//let dividirNumeros = (a,b) =>{
//    return a/b
//}

// ou

//let dividirNumeros = (a,b) => a/b

let $pessoas = document.getElementsByClassName("pessoa")

for ($pessoa of $pessoas){
    $pessoa.style.backgroundColor="lightgreen"
    $pessoa.innerText="Filipe"

}

console.log($pessoas)
