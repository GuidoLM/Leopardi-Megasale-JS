
/*
//Esta porción de código para fines de la evaluación lo que hacen es entorpecer el proceso por lo que está comentado


//Registro de usuario
let user = prompt("Registra un nombre de usuario (en mayúsculas)");
let pass = prompt("Registra una contraseña(No olvide anotarla)");


//Una vez registrado el usuario se le solicita iniciar sesión, en caso de que la información no concuerde no se ejecutará el ciclo de compra
alert(
  "Bienvenido, si usted es un usuario registrado por favor introduzca sus datos para inciar sesión"
);

let usuario = prompt("Ingresa tu nombre de usuario (respeta las mayúsculas)");
let contrasenya = prompt("Ingrese tu contraseña (respeta las mayúsculas)");
*/

//Antiguo carrito de compras
/*
let cargar //Para repetir el ciclo y se puedan cargar múltiples productos
let fecha //Para indicar la fecha en la que se realizó la carga de productos
let contador = 0 //Para indicar cuantos productos cargó el usuario al momento de finalizar el proceso

do {
  articulos.push(new item())
  cargar = prompt("¿Va a cargar otro artículo? (indice 'no' si ya cargó todos los productos): ")
  contador += 1
} while (cargar != "no")

articulos.sort((a,b)  => a.precio - b.precio)

fecha = new Date()
console.table(articulos)
console.log("Usted ha cargado a la plaforma "+contador+" articulo/s en el día "+fecha+" muchas gracias.")
*/

//Antigua función de compra
/* Esta sección está en construcción, la idea es hacer el carrito de compras con un array pero no tuve el tiempo para ello por ahora.

function comprar(){
    let producto = prompt(
        "Hola " +
          user +
          ", ¡Vamos a empezar a comprar!, por favor indica que producto estás buscando de entre la siguiente lista de productos: MONOPATIN - COMEDERO - SKATE - PAVA - CACEROLA - MICROFONO"
      );
      let precio = 0;
    
      while (producto != "FINALIZAR"){
        switch (producto) {
          case "MONOPATIN":
            //En cada caso se va actualizando la variable precio para hacer un seguimiento de lo que el usuario tiene que pagar
            precio = precio + 16999;
            //Dicho seguimiento se muestra por consola para que pueda ver lo que lleva acumulado
            console.log(
              "El costo del producto es $16.999 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          case "COMEDERO":
            precio = precio + 1899;
            console.log(
              "El costo del producto es $1.899 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          case "SKATE":
            precio = precio + 5999;
            console.log(
              "El costo del producto es $5.999 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          case "PAVA":
            pava = 3999;
            precio = precio + 3999;
            console.log(
              "El costo del producto es $3.999 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          case "CACEROLA":
            precio = precio + 13999;
            console.log(
              "El costo del producto es $13.999 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          case "MICROFONO":
            precio = precio + 2999;
            console.log(
              "El costo del producto es $2.999 " +
                user +
                " lleva un total de: $" +
                precio
            );
            break;
    
          default:
            precio = precio + 0;
            console.log("El producto descrito no se encuentra disponible.");
            break;
        }
        producto = prompt(
          "Se ha incorporado el producto al carrito, te recordamos que llevas un total de: $" +
            precio +
            " si quieres agregar algo más por favor escribe el nombre del producto MONOPATIN - COMEDERO - SKATE - PAVA - CACEROLA - MICROFONO, si ya has terminado de elegir por favor escribe 'FINALIZAR'"
        );
      }
    //Una vez el usuario ha terminado de escoger todos los productos accede a un descuento del 40% de su compra, para eso se ejecuta la función desc
      const desc = function (precio) {
        return precio - precio * 0.4;
      };
    
      //El descuento se aplica y se le informa al usuario cuanto será el monto final a pagar a través de un alert que ejecuta la función
      alert(
        "El precio final será $" +
          desc(precio) +
          " ¡Sí, te ofrecemos un 40% de descuento!"
      );
    
}

//Gestión 

if (usuario == user && contrasenya == pass) {
  alert(
    "Bienvenido "+
      user+
      " Por favor, recuerda que para acceder a nuestro simulador debes escribir todo en mayúsculas"
  );

  //Una vez que el usuario ha iniciado sesión comienza el ciclo de compra, el usuario debe elegir los productos que necesita
comprar()


  //En caso de que el usuario no introduzca bien sus datos no inicia el proceso de compra por lo que tendrá que volver a iniciar desde el principio
} else {
  alert(
    "Tu usuario y/o contraseña son incorrectos. Verifícalos por favor (O actualiza la página para volver a registrar tus datos)"
  );
}
*/

