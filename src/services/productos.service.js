// Importamos el array de productos
import productos from "../data/productos.js";

// Variable para controlar el próximo ID disponible
let nextId = productos.length + 1;

// Obtener todos los productos
export const obtenerTodos = () => {
  return productos;
};

// Agregar un nuevo producto al array usando push
export const agregarProducto = (nombre, precio, stock, categoria, marca) => {
  const nuevoProducto = {
    id: nextId++,
    nombre,
    precio,
    stock,
    categoria,
    marca
  };
  productos.push(nuevoProducto);
  return nuevoProducto;
};

// Buscar un producto por ID usando find
export const buscarPorId = (id) => {
  return productos.find((prod) => prod.id === Number(id));
};

// Buscar productos por nombre usando filter (coincidencia parcial, sin distinguir mayúsculas)
export const buscarPorNombre = (nombre) => {
  const nombreLower = nombre.toLowerCase();
  return productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(nombreLower)
  );
};

// Buscar productos por categoría usando filter
export const buscarPorCategoria = (categoria) => {
  const categoriaLower = categoria.toLowerCase();
  return productos.filter((prod) =>
    prod.categoria.toLowerCase() === categoriaLower
  );
};
