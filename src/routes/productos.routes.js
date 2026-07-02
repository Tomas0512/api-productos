import { Router } from "express";
import {
  listarProductos,
  crearProducto,
  consultarPorId,
  buscarProductosPorNombre,
  buscarProductosPorCategoria
} from "../controllers/productos.controller.js";

const router = Router();

// POST /productos - Registrar un nuevo producto
router.post("/", crearProducto);

// GET /productos - Listar todos los productos
router.get("/", listarProductos);

// GET /productos/buscar?nombre=... - Buscar por nombre (query param)
router.get("/buscar", buscarProductosPorNombre);

// GET /productos/categoria/:categoria - Buscar por categoría
router.get("/categoria/:categoria", buscarProductosPorCategoria);

// GET /productos/:id - Consultar por ID (va al final para evitar conflictos)
router.get("/:id", consultarPorId);

export default router;
