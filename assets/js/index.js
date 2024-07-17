const precio = 400000

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const sumar = document.querySelector("#btnsuma")
const restar = document.querySelector("#btnresta")
const cantidadSpan = document.querySelector(".cantidad")
const totalSpan = document.querySelector(".valor-total")

let contador = 0;
let precioTotal = cantidadSpan * precio;

totalSpan.innerHTML = precioTotal
/*precioSpan.innerHTML = precio*/
cantidadSpan.innerHTML = contador

/*funcion para sumar*/
function increase() {
    contador = contador + 1;
    precioTotal = contador* precio
    cantidadSpan.innerHTML = contador
    totalSpan.innerHTML = precioTotal
    

}
/*funcion para restar*/
function decrease() {
    if (contador > 0) {
        contador = contador - 1;
        precioTotal = contador * precio
        cantidadSpan.innerHTML = contador;
        totalSpan.innerHTML = precioTotal
        
    }

}








