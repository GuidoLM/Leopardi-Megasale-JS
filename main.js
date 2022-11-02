const carrito = []

const articulos = [
  {
    sku:5094,
    articulo: "Monopatín Urbano",
    precio: 16999,
    img: ".."
  },
  {
    sku:13006,
    articulo: "Comedero doble",
    precio: 1899,
    img: ".."
  },
  {
    sku:5023,
    articulo: "Skate Profesional",
    precio: 5999,
    img: ".."
  },
  {
    sku:18000,
    articulo: "Pava Eléctrica +CASAOPATIN",
    precio: 3999,
    img: ".."
  },
  {
    sku:0631,
    articulo: "Set de Cacerolas x4",
    precio: 13999,
    img: ".."
  },
  {
    sku:14015,
    articulo: "Microfono Parlante",
    precio: 2299,
    img: ".."
  }
]


//funciones 
//Función para identificarse

function identificacion(){
  localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
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
      publicaciones.className="card col-md-3"
        publicaciones.innerHTML += `
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
                data-bs-target="#p1"
              >
                Agregar al carrito
              </button>
      
              <!-- despliegue del cuadro flotante -->
              <div
                class="modal fade"
                id="p1"
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
                      <button id='AC${producto.sku}' type="button" class="btn btn-primary fondoBoton">
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
        `;;
    }

    articulos.forEach((producto)=>{
        document.getElementById(`AC${producto.sku}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    });
}

//Función para agregar al carro de compras
function agregarAlCarrito(articuloAgregadoAlCarro){
  if (localStorage.getItem("usuario") === "null" | localStorage.getItem("usuario") === ""){
    localStorage.setItem("usuario", prompt("Hola, bienvenido, ¿puede indicarnos su nombre?"))
  }else{
  carrito.push(articuloAgregadoAlCarro)
  console.table(carrito)
  alert("Se agrego el "+articuloAgregadoAlCarro.articulo+ " al carro de compras, muchas gracias "+localStorage.getItem("usuario"))
  }
}

mostrador();

identificarse.onclick = () => {
  identificacion()
}
