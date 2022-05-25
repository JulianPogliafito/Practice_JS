// alert('Coders')

// let consumoM;
// let costoKwh;

//consumoM = prompt(`Ingrese el consumo mensual de su factura de luz`)



// let numero1 = parseInt(prompt(`Ingresa un numero`))
// let numero2 = parseInt(prompt(`Ingrese otro numero`))

// for (let i = 0; i <= numero2; i++) {
//     console.log(
//         `El Resultado de ` + numero1 + ` X ` + i + ` Es igual a ` + numero1*i
//     )
    
// }

// let ingreso = prompt(`Ingrese un producto`)


// while (ingreso != `Salir`) {
//     console.log(`El producto ingresado es ` + ingreso)
// }

/*for(let i=1; i<=7; i++){
    
    switch (i) {
        case 1: console.log(`El 1 es Lunes`); 
            break;
        case 2: console.log(`El 2 es Martes`); 
            break;
        case 3: console.log(`El 3 es Miercoles`); 
            break;
        case 4: console.log(`El 4 es Jueves`); 
            break;
        case 5: console.log(`El 5 es Viernes`); 
            break;
        case 6: console.log(`El 6 es Sabado`); 
            break;
        default: console.log(`El 7 es Domingo`)
            break;
    }

} */

//FUNCIONES -- Realizar la funcion y despues llamarla para que se ejecute

// function username() {
//     let nombreIngresado = prompt(`Ingrese tu nombre`)
//     console.log(`El nombre ingresado es: ` + nombreIngresado)
    
// }

// username();


// let precio = Number(prompt(`Ingrese el precio del producto`))
// let iva = (Number(prompt(`Ingrese el iva del producto`)) /100) + 1

// function precioFinal(num1, num2) {
//     return num1 * num2
// }

// function mostrar(mensaje) {
//     console.log(mensaje)
// }

// let precioprod = precioFinal(precio,iva)
// mostrar(precioprod)



//OBJETOS 
//objetos literales

// const persona1 = {
//     nombre: `Julian`,
//     edad: 27,
//     direccion: `Calle 123`,
//     casado: false,
// }
// const persona2 = {
//     nombre: `Carlos`,
//     edad: 45,
//     direccion: `Calle 321123`,
// }

// //notacion de punto para captar una propiedad del objeto
// console.log(persona1)
// console.log(persona2)
// console.log(persona1.nombre)
// console.log(persona2.nombre);

// //asignar una propiedad al objeto 

// persona1.ojos = `Marrones`;
// persona2.casado = true;
// persona2.ojos = `Azules`


//Crear un objeto mediante una funcion constructora

// function Persona(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad; 
//     this.direccion = direccion;

//     this.hablar = ()=>{
//         console.log(`Hola soy ` + this.nombre)
//     }
// }

// const persona1 = new Persona(`Maria`, 24, `Calle 123`)
// const persona2 = new Persona(`Jose`, 32, `Calle Agag`)

// console.log(persona1)
// console.log(persona2)

// persona1.hablar()
// persona2.hablar()

/*ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ */


// let usuario;
// let password;

// function ingresoDatos(mensaje) {
//     let dato = prompt(mensaje)
//     return dato;
// }

// let opcion = Number(ingresoDatos(`Que desea hacer? \n 1- Ingresar \n 2- Registrarse \n 3- Salir`))

// function login(user, pass) {
//     user = ingresoDatos(`Usuario:`)
//     pass = ingresoDatos(`Password:`)
//     if(user || pass){
//         console.log(`Bienvenid@ ` + user)
//         return user, pass;
//     }else{
//         alert(`Debes ingresar tus datos`)
//     }
// }

// switch (opcion) {
//     case 1:
//         login(usuario, password)
        
//         break;
//     case 2:
//         usuario = ingresoDatos(`Usuario a registrar: `)
//         password = ingresoDatos(`Contraseña: `)
//         console.log(`Nuevo usuario: ${usuario} / Contraseña: ${password}`)
//         break;
//     case 3:
//         alert(`Nos vemos la proxima`)
//         break;
//     default:
//         alert(`No es una opcion correcta`);
//         break;
// }


// class NewUser {
//     constructor(usuario, password, id){
//         this.usuario = usuario;
//         this.password = password;
//         this.id = id;
//     } 
// }

// const nuevoUsuario = new NewUser(usuario, password, 1)
// console.log(nuevoUsuario)


/*ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ */

// let hamburguesaCod;

// let carrito = [];

// class Hamburguesa {
//     constructor(nombre, stock, precio, ingredientes, id, img, cantidad){
//     this.nombre = nombre;
//     this.stock = stock;
//     this.precio = precio;
//     this.ingredientes = ingredientes;
//     this.id = id;
//     this.img = img;
//     this.cantidad = cantidad;

//     this.restarStock = () =>{
//         this.stock --
//     }

//     }

// }

// const sea = new Hamburguesa (`El mar`, 30, 15,`Pan, 2 carnes, lechuga y tomate`, 1)
// const air = new Hamburguesa (`El aire`, 15, 18,`Pan, 3 carnes, Cheddar y panceta`, 2)
// const fire = new Hamburguesa (`El fuego`, 12, 10, `Pan, 1 carne, Jamon queso y huevo`, 3)
// const ground = new Hamburguesa (`La tierra`, 10, 13, `Pan, 2 carnes, Cebolla caramelizada y Cheddar`, 4)

// const hamburguesas = [sea, air, fire, ground]

// const mostrarLista = () => {
//     let lista = "";
//     hamburguesas.forEach(element => {
//         lista += `${element.id} - ${element.nombre} \n Ingredientes: ${element.ingredientes}\n \n`
//     })
    
//     let opcion = parseInt(prompt(`Que hamburguesa vas a llevar? \n ${lista}`))

//     while(opcion < 1 || opcion > 4) {
//         opcion = parseInt(prompt(`No existe ese codigo! Que hamburguesa vas a llevar? \n ${lista}`))
//     }
//     return opcion;
// };

// const hamburguesaPedida = (id) =>{
//     console.log(id)
//     let hamburguesaFind = hamburguesas.find(element =>{
//         return element.id === id
//     })
//     carrito.push(hamburguesaFind)

//     let agregar = confirm(`Desea añadir otra hamburguesa: `)
//     if (agregar === true){
//         pedir();
//     }
// }

// const pedir = () =>{
//     hamburguesaCod = mostrarLista();
//     hamburguesaPedida(hamburguesaCod);
    
// }




// pedir();
// console.log(carrito)



// const button = document.getElementsByTagName("button")[1]

// console.log(button)

// const contenedor = document.getElementById("container")
// const click = document.getElementById("button")

// contenedor.innerHTML = "<p>Creamos un texto desde JS</p>"







class Hamburguesa {
    constructor(nombre, precio, id, ingredientes, img, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.ingredientes = ingredientes;
        this.img = img;
        this.cantidad = cantidad;
    }
}


const sea = new Hamburguesa (`Sea`, 30, 1, `Pan, 2 carnes, lechuga y tomate`, `./img/hamburguesaSea.png`)
const air = new Hamburguesa (`Air`, 15, 2,`Pan, 3 carnes, Cheddar y panceta`, `./img/hamburguesaAir.png`)
const fire = new Hamburguesa (`Fire`, 12, 3, `Pan, 1 carne, Jamon queso y huevo`, `./img/hamburguesaFire.png`)
const ground = new Hamburguesa (`Ground`, 10, 4, `Pan, 2 carnes, Cebolla y Cheddar`, `./img/hamburguesaGround.png`)

const hamburguesas = [sea, air, fire, ground]

const divContenedor = document.querySelector(`.container`)

const mostrarBurguers = () =>{
    hamburguesas.forEach(element => {
        divContenedor.innerHTML += `<div class="card"><img class="imagen" src=${element.img}>
        <p class="name">${element.nombre}</p>
        <p>Ingredientes: ${element.ingredientes}</p>
        <p class="price">Precio: $${element.precio}</p>
        <div> 
        <button class="botonAgregar">Agregar al pedido</button>
        </div>
        </div>`
    })
    
}

mostrarBurguers()




const botonAgregar = document.querySelectorAll(`.botonAgregar`)

botonAgregar.forEach(botonAgregarCarrito => {
    botonAgregarCarrito.addEventListener(`click`, botonAgregarClicked)
})

function botonAgregarClicked(event) {
    const button = event.target;
    const item = button.closest(`.card`)
    
    const itemNombre = item.querySelector(`.name`).textContent;
    const itemPrecio = item.querySelector(`.price`).textContent;
    const itemImg = item.querySelector(`.imagen`).src;
    
    AgregarItemAlCarrito(itemNombre, itemPrecio, itemImg)
    
}

const lineaCarrito = document.querySelector(`.lineaCarrito`)

function AgregarItemAlCarrito(itemNombre, itemPrecio, itemImg) {
    const filaCarrito =  document.createElement(`div`);
    const filaCarritoContenido = `
    <div>
        <img src="${itemImg}" alt="">
        <h6>${itemNombre}</h6>
    </div>
    <div>
        <p>${itemPrecio}</p>
    </div>
    `;

    filaCarrito.innerHTML = filaCarritoContenido;
    lineaCarrito.appendChild(filaCarrito)
}

// estaasdfasdf
