const carrito = []

const articulos = [
  {
    sku:5094,
    articulo: "Monopatín Urbano",
    precio: 16999,
    img: "img/5094.jpg"
  },
  {
    sku:13006,
    articulo: "Comedero doble",
    precio: 1899,
    img: "img/13006.jpg"
  },
  {
    sku:5023,
    articulo: "Skate Profesional",
    precio: 5999,
    img: "img/5023.jpg"
  },
  {
    sku:18000,
    articulo: "Pava Eléctrica +CASAOPATIN",
    precio: 3999,
    img: "img/18000.jpg"
  },
  {
    sku:0631,
    articulo: "Set de Cacerolas x4",
    precio: 13999,
    img: "img/0631.jpg"
  },
  {
    sku:14015,
    articulo: "Microfono Parlante",
    precio: 2299,
    img: "img/14015.jpg"
  }
]


//funciones 
//Función para identificarse

function identificacion(){
  let titulo = document.getElementById("titulo")
  let ancla = document.getElementById("publi")
  titulo.innerHTML = `<h1 id="titulo">Identificate</h1>`
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
let nombre = document.getElementById("formGroupExampleInput")
let apellido = document.getElementById("formGroupExampleInput2")
let botonIdentificacion = document.getElementById("botonIdentificacion")

botonIdentificacion.onclick= () => {
  if (nombre.value === "null" | apellido.value === "null" | nombre.value === " " | apellido.value === " " | nombre.value === "" | apellido.value === ""){
    Swal.fire({
      position: 'center-center',
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
    position: 'center-center',
    icon: 'success',
    title: "Hola "+localStorage.getItem("usuario")+ " Te rediriremos a la página principal.",
    showConfirmButton: false,
    timer: 1500
  })
  mostrador()
  }
}

// document.getElementById(botonIdentificacion).addEventListener("summit",function(){
//   localStorage.setItem("usuario", nombre.value)
// });
 
}

// Función para crear productos
function item(sku, articulo, precio){
  this.sku = prompt("Inserta el código SKU: ", sku),
  this.articulo = prompt("Inserta el nombre del producto: ", articulo),
  this.precio = parseFloat(prompt("Introduce el precio del producto: ", precio)); 
}

//Función para mostrar los productos
let publicaciones = document.getElementById("publi");
function mostrador(){
  for(const producto of articulos){
    let titulo = document.getElementById("titulo")
    let publicados = document.createElement("div");
    titulo.innerHTML = `<h1 id="titulo">Productos</h1>`
    publicados.className="col-md-3";
    publicados.innerHTML = `
    <div class="card a2">
               <img
                 src="${producto.img}"
                 class="card-img-top"
                 alt="${producto.articulo}"
               />
                 <div class="card-body">
                   <h4 class="card-title">${producto.articulo}</h4>
                   <h5>$ ${producto.precio}</h5>
          
                   <a href="#" class="btn btn-primary fondoBoton">Comprar</a>
          
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
  
  };
}

//Función para agregar al carro de compras
function agregarAlCarrito(articuloAgregadoAlCarro){
  if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
    identificacion()
  }else{
  carrito.push(articuloAgregadoAlCarro)
  console.table(carrito)
  Swal.fire({
    position: 'center-center',
    icon: 'success',
    title: "Se agrego el "+articuloAgregadoAlCarro.articulo+ " al carro de compras, muchas gracias "+localStorage.getItem("usuario"),
    showConfirmButton: false,
    timer: 1500
  })
  }
}

//Estado inicial de la web
mostrador();


//Enlaces
const paginaInicio = document.getElementById("productos")


identificarse.onclick = () => {
  identificacion()

    }

paginaInicio.onclick = () => {
  mostrador()

    }