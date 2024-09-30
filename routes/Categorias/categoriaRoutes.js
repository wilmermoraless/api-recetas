import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/Categorias/categoriaControllers.js";

const categoriaRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
categoriaRouter.get("/", allController);
categoriaRouter.get("/:id", findController);
categoriaRouter.post("/", createController);
categoriaRouter.put("/:id", updateController);
categoriaRouter.delete("/:id", deleteController);

export default categoriaRouter;