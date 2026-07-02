// Importamos las funciones del servicio
import {
  obtenerTodos,
  agregarProducto,
  buscarPorId,
  buscarPorNombre,
  buscarPorCategoria
} from "../services/productos.service.js";

// Controlador para listar todos los productos
export const listarProductos = (req, res) => {
  const productos = obtenerTodos();
  res.json({
    cantidad: productos.length,
    productos
  });
};

// Controlador para registrar un nuevo producto con validaciones
export const crearProducto = (req, res) => {
  const { nombre, precio, stock, categoria, marca } = req.body;

  // Validar que nombre sea obligatorio
  if (!nombre) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Validar que precio sea obligatorio
  if (precio === undefined || precio === null) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Validar que precio sea mayor a 0
  if (typeof precio !== "number" || precio <= 0) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Validar que stock sea mayor o igual a 0
  if (stock === undefined || stock === null || typeof stock !== "number" || stock < 0) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Validar que categoría sea obligatoria
  if (!categoria) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Validar que marca sea obligatoria
  if (!marca) {
    return res.status(400).json({ mensaje: "Datos inválidos" });
  }

  // Si todas las validaciones pasan, agregar el producto
  const nuevoProducto = agregarProducto(nombre, precio, stock, categoria, marca);
  res.status(201).json({
    mensaje: "Producto registrado exitosamente",
    producto: nuevoProducto
  });
};

// Controlador para consultar un producto por ID
export const consultarPorId = (req, res) => {
  const { id } = req.params;
  const producto = buscarPorId(id);

  if (!producto) {
    return res.status(404).json({
      mensaje: `Producto con ID ${id} no encontrado`
    });
  }

  res.json({ producto });
};

// Controlador para buscar productos por nombre (query param: ?nombre=)
export const buscarProductosPorNombre = (req, res) => {
  const { nombre } = req.query;

  if (!nombre) {
    return res.status(400).json({
      mensaje: "Debe proporcionar un nombre para buscar"
    });
  }

  const resultados = buscarPorNombre(nombre);

  res.json({
    cantidad: resultados.length,
    productos: resultados
  });
};

// Controlador para buscar productos por categoría (param de ruta)
export const buscarProductosPorCategoria = (req, res) => {
  const { categoria } = req.params;
  const resultados = buscarPorCategoria(categoria);

  res.json({
    cantidad: resultados.length,
    categoria,
    productos: resultados
  });
};
