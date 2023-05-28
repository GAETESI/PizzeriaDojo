function pizzaOven (corteza, topping, quesos, salsas){
    var pizza = {};
    pizza.corteza = corteza;
    pizza.topping = topping;
    pizza.quesos = quesos;
    pizza.salsa = salsas;
    return pizza;
}

var Chicago = pizzaOven("delgada", "aceituna", "Brie", ["bolognesa", "pesto"]);
console.log(Chicago);

var Tradicional = pizzaOven("tradicional", "tomate cherry", "mantecoso", ["bolognesa"]);
console.log(Tradicional);

var Mozzarella = pizzaOven("A la piedra", "albahaca", ["mozzarella"], ["pesto", "bechamel"]);
console.log(Mozzarella);

var pepperoni = pizzaOven("A la piedra", ["pepperoni", "salchicha"], ["azul"], ["pesto", "bechamel"]);
console.log(pepperoni);

var marinara = pizzaOven("delgada", "salame", ["Gouda", "Cheddar"], ["marinaral"]);
console.log(marinara);

var feta = pizzaOven("tradicional", "albahaca", ["feta", "mozzarella"], ["pesto"]);
console.log(feta);

var vegetariana = pizzaOven("tradicional", ["champiñon", "cebolla", "aceitunas"], ["mozzarella"], ["bolognesa"]);
console.log(vegetariana);

var CuatroEstaciones = pizzaOven("delgada", ["salame", "carne", "tocino"], ["mozzarella"], ["bolognesa"]);
console.log(CuatroEstaciones);

var Margarita = pizzaOven("delgada", ["albahaca", "tomate cherry", "aceituna"], ["mozzarella"], ["pesto"]);
console.log(Margarita);

//opcion pizza random//
function pizzaOven() {
var opcionesCorteza = ['Delgada', 'Gruesa', 'Pan', 'Sin gluten'];
var opcionesTopping = ['Pepperoni', 'Jamón', 'Champiñones', 'Pimientos', 'Aceitunas'];
var opcionesQuesos = ['Mozzarella', 'Cheddar', 'Parmesano', 'Gorgonzola'];
var opcionesSalsas = ['Tomate', 'Pesto', 'Salsa blanca'];

const corteza = opcionesCorteza[Math.floor(Math.random() * opcionesCorteza.length)];
const topping = opcionesTopping[Math.floor(Math.random() * opcionesTopping.length)];
const quesos = opcionesQuesos[Math.floor(Math.random() * opcionesQuesos.length)];
const salsas = opcionesSalsas[Math.floor(Math.random() * opcionesSalsas.length)];


const pizza = {
    corteza: corteza,
    topping: topping,
    quesos: quesos,
    salsa: salsas
};
    return pizza;
}
    

const pizzaAleatoria = pizzaOven();
console.log(pizzaAleatoria);