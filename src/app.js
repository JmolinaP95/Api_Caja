import express from "express";


//import morgan from "morgan";
import cajaRoutes from "./routes/caja.routes.js";
const app = express();

// Middlewares
//app.use(morgan("dev"));
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(cajaRoutes);


// exportamos la app
export default app;
