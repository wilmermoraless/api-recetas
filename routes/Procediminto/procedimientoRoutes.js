import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/Procediminto/procedimientoControllers.js";

const procedimientoRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
procedimientoRouter.get("/", allController);
procedimientoRouter.get("/:id", findController);
procedimientoRouter.post("/", createController);
procedimientoRouter.put("/:id", updateController);
procedimientoRouter.delete("/:id", deleteController);

export default procedimientoRouter;