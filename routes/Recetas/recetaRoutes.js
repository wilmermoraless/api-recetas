import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/Recetas/recetasControllers.js";

const recetaRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
recetaRouter.get("/", allController);
recetaRouter.get("/:id", findController);
recetaRouter.post("/", createController);
recetaRouter.put("/:id", updateController);
recetaRouter.delete("/:id", deleteController);

export default recetaRouter;