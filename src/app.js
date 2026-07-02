import express from "express";
import router from "./routes/productos.routes.js";

// Creamos la aplicación Express
const app = express();

// Middleware para parsear el body de las peticiones como JSON
app.use(express.json());

// Definimos el puerto donde correrá el servidor
const PORT = 3000;

// Montamos las rutas de productos en /productos
app.use("/productos", router);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Endpoints disponibles:`);
  console.log(`  POST  http://localhost:${PORT}/productos`);
  console.log(`  GET   http://localhost:${PORT}/productos`);
  console.log(`  GET   http://localhost:${PORT}/productos/buscar?nombre=`);
  console.log(`  GET   http://localhost:${PORT}/productos/categoria/:categoria`);
  console.log(`  GET   http://localhost:${PORT}/productos/:id`);
});
