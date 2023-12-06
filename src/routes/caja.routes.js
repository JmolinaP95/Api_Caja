import { Router } from "express";
import {
  createCaja,
  updateCaja,
  deleteCaja,
  getCajas,
  getCaja
} from "../controllers/cajas.controllers.js";


const router = Router();

// Routes
router.get("/", getCajas);
router.post("/", createCaja);
router.put("/:id", updateCaja);
router.delete("/:id", deleteCaja);
router.get("/:id", getCaja);

export default router;
