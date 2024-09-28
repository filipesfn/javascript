async function fazerPedidoDeCafe() {
    console.log("Fazendo pedido de café...");
    const cafe = await prepararCafe(); 
    console.log("Café pronto: ", cafe);
    console.log("Desfrutando do café");
    
}

function prepararCafe() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Café quentinho");
        }, 2000);
    });
}

fazerPedidoDeCafe();
console.log("Fazendo outras coisas enquanto o café é preparado");