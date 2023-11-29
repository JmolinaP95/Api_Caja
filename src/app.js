import express from "express";


//import morgan from "morgan";
import cajaRoutes from "./routes/caja.routes.js";
const app = express();
app.use(cajaRoutes);




// exportamos la app
export default app;
