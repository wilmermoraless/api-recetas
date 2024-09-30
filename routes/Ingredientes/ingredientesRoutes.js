import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/Ingredientes/ingredientesControllers.js";

const ingredienteRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
ingredienteRouter.get("/", allController);
ingredienteRouter.get("/:id", findController);
ingredienteRouter.post("/", createController);
ingredienteRouter.put("/:id", updateController);
ingredienteRouter.delete("/:id", deleteController);

export default ingredienteRouter;