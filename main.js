//Declaro los array primeramente que voy a utilizar
let carrito = []
let articulos = []

//Acá declaro algunas variables y constantes para armar la interfaz de la página en base a la navegación del usuario. Si está en la página de productos o si está en la página de identificación o en el carrito, de esta forma siempre manejo un html pero con distintas interfaces 
let titulo = document.getElementById("titulo")
let ancla = document.getElementById("publi")
let publicaciones = document.getElementById("publi");
const paginaInicio = document.getElementById("productos")
const carroDeCompras = document.getElementById("carroDeCompras")

//Funciones

//Función para obtener datos del "servidor", con esta saco los productos del JSON para insertarlo en el carrito y que se impriman en pantalla
function obtenerArticulos(){
  const obtener="/articulos.json";
  fetch(obtener)
      .then(resultado => resultado.json())
      .then(data => {
          articulos=data.articulos;
          mostrador();
      });
}

//Función para identificarse, con esta tomo el nombre y apellido del usuario y lo concateno en el localStorage para poder personalizar los mensajes de la web. Esta función dibuja la información para tomar datos sin cambiar de html
function identificacion(){
  titulo.innerHTML = `<h1 id="titulo">Identificate</h1>`;
  ancla.innerHTML = `
  <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingresa tu nombre">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Apellido</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingresa tu apellido">
</div>
<div class="col-12">
<button type="submit" class="btn btn-primary" id="botonIdentificacion">Identificarse</button>
</div>
`;
let nombre = document.getElementById("formGroupExampleInput");
let apellido = document.getElementById("formGroupExampleInput2");
let botonIdentificacion = document.getElementById("botonIdentificacion");


botonIdentificacion.onclick= () => {
  if (nombre.value === "null" | apellido.value === "null" | nombre.value === " " | apellido.value === " " | nombre.value === "" | apellido.value === ""){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: "Introdujo un nombre y/o apellidos inválidos, por favor asegurese de llenar los datos como se le requiere",
      showConfirmButton: false,
      timer: 1500
    })
  }else{
  localStorage.setItem("usuario", nombre.value + " " + apellido.value)
  nombre.value = ""
  apellido.value = ""
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: "Hola "+localStorage.getItem("usuario")+ " Te redirijiremos a la página principal.",
    showConfirmButton: false,
    timer: 3000
  })
  publicaciones.innerHTML = ` `
  mostrador()
  }
} 
}

//Función para mostrar los productos, esta función toma los productos del array de artículos y los dibuja en pantalla
function mostrador(){
  titulo.innerHTML = `<h1 id="titulo">Productos</h1>`
  for(const producto of articulos){
    let publicados = document.createElement("div");
    publicados.className="col-md-3 row";
    publicados.innerHTML += `
    <div class="card a2">
               <img
                 src="${producto.img}"
                 class="card-img-top"
                 alt="${producto.articulo}"
               />
                 <div class="card-body">
                   <h4 class="card-title">${producto.articulo}</h4>
                   <h5>$ ${producto.precio}</h5>
          
                   <a id='comprar${producto.sku}' class="btn btn-primary fondoBoton">Comprar</a>
          
                   <button
                     type="button"
                     class="btn btn-primary fondoBoton"
                     data-bs-toggle="modal"
                     data-bs-target="#p1${producto.sku}"
                   >
                     Agregar al carrito
                   </button>
          
                   <!-- despliegue del cuadro flotante -->
                   <div
                     class="modal fade"
                     id="p1${producto.sku}"
                     tabindex="-1"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true"
                   >
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">
                             Agregar al carrito
                           </h5>
                           <button
                             type="button"
                             class="btn-close fondoBoton"
                             data-bs-dismiss="modal"
                             aria-label="Close"
                           ></button>
                         </div>
                         <div class="modal-body">
                           <img
                             src="${producto.img}"
                             class="card-img-top"
                             alt="${producto.articulo}"
                           />
                           <h4 class="card-title">${producto.articulo}</h4>
                           <h5>$ ${producto.precio}</h5>
                         </div>
                         <div class="modal-footer">
                           <button
                             type="button"
                             class="btn btn-secondary fondoBoton"
                             data-bs-dismiss="modal"
                           >
                             Cancelar
                           </button>
                           <button id='AC${producto.sku}' type="button" class="btn btn-primary fondoBoton" data-bs-dismiss="modal">
                             Agregar al carrito
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
               </div>
           </div>
    `;
    publicaciones.append(publicados);
    document.getElementById(`AC${producto.sku}`).addEventListener("click",function(){
    agregarAlCarrito(producto);
    });
    document.getElementById(`comprar${producto.sku}`).addEventListener("click",function(){
      if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
        identificacion()
      }else{
      carrito.push(producto);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Perfecto "+localStorage.getItem("usuario")+ " Confirma tu compra dándole al botón de comprar",
        showConfirmButton: false,
        timer: 3000
      })
      publicaciones.innerHTML = ` `
      mostradorDeCarrito();
      console.table(carrito);
    }});
  };
}

//Función para agregar al carro de compras, esta función detecta los click en "agregar al carrito" del usuario y agrega el artículo al array del carrito
function agregarAlCarrito(articuloAgregadoAlCarro){
  if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
    identificacion()
  }else{
  carrito.push(articuloAgregadoAlCarro)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: "Se agrego el "+articuloAgregadoAlCarro.articulo+ " al carro de compras, muchas gracias "+localStorage.getItem("usuario"),
    showConfirmButton: false,
    timer: 1500
  })

  }
}

//Función para mostrar los productos en el carrito

function mostradorDeCarrito(){
  titulo.innerHTML = `<h1 id="titulo">Carro de Compras</h1>`
  let productosEnElCarro = document.createElement("div")
    for(const producto of carrito){
        productosEnElCarro.className="container text-center card";
        productosEnElCarro.innerHTML += `
        <div class="row">
        <div class="col">
        <img width=50% src="${producto.img}" alt="${producto.articulo}">
        </div>
        <div class="col">
        ${producto.articulo}
        </div>
        <div class="col">
        ${producto.precio}
        </div>
        <div class="col">
      </div>`;
      publicaciones.append(productosEnElCarro)
    }
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0)
      let mostradorDeSumatoria = document.createElement("div")
      mostradorDeSumatoria.className="container text-center card";
      mostradorDeSumatoria.innerText="El total a pagar es $"+totalCarrito 
      mostradorDeSumatoria.innerHTML+= `
      <button id="comprar" type="button" class="btn btn-primary fondoBoton">
        Comprar
        </button>
        <button id="vaciarCarrito" type="button" class="btn btn-primary fondoBoton">
        Vaciar carrito
        </button>`
      publicaciones.append(mostradorDeSumatoria)  
      document.getElementById("comprar").addEventListener("click", function() {
        comprar()
      })
      document.getElementById(`vaciarCarrito`).addEventListener("click", function() {
        carrito=[]
        publicaciones.innerHTML = ` `
        mostradorDeCarrito()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Hemos vaciado su carrito de compra",
          showConfirmButton: false,
          timer: 1500
        })
      })
}

function comprar (){
  carrito=[]
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: "Se realizado la compra exitosamente, muchas gracias "+localStorage.getItem("usuario"),
    showConfirmButton: false,
    timer: 3000
  })
  publicaciones.innerHTML = ` `
  mostrador()
}
//Estado inicial de la web, esta función se ejecuta al abrir la web, solicita los productos al "servidor" y ejecuta la función de mostrador para que aparezcan en la web.
obtenerArticulos();

//Enlaces, aquí tengo todos los "escuchadores" de la navegación, de esta forma se borra el html y se reescribe en base a la opción que clickee el usuario

identificarse.onclick = () => {
  publicaciones.innerHTML = ` `
  identificacion()
}

paginaInicio.onclick = () => {
  publicaciones.innerHTML = ` `
  mostrador()
}

carroDeCompras.onclick = () => {
  publicaciones.innerHTML = ` `
  mostradorDeCarrito()
}