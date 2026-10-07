const botonPrueba = document.querySelector<HTMLButtonElement>("#boton-prueba");
const mensajePrueba = document.querySelector<HTMLParagraphElement>("#mensaje-prueba");
if (botonPrueba !== null && mensajePrueba !== null) {
botonPrueba.addEventListener("click", () => {
mensajePrueba.textContent = "¡La conexión funciona!"
});
}

const buscador = document.querySelector<HTMLInputElement>("#busqueda");
if (buscador !== null && mensajePrueba !== null) {
buscador.addEventListener("input", () => {
mensajePrueba.textContent = "Estás buscando: " + buscador.value;
});
}


interface Producto {
id: number;
nombre: string;
categoria: string;
precio: number;
stock: number;
}

const  Juegos: Producto[] = [
  {id: 1, nombre: "gta", categoria: "accion", precio: 9999999, stock: 7},
  {id: 2, nombre: "mario", categoria: "plataformero", precio: 67, stock: 87},
  {id: 3, nombre: "sonic", categoria: "sonic", precio: 1, stock: 99999999999999999999999999999999999999}
]