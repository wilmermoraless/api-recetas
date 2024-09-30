import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
    } from "../../db/Categorias/categoriaQueries.js";
    
    /**
    * Obtener todos las categotias de la base de datos
    */
    const allController = async (req, res) => {
    // Un bloque try-catch sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
    // Ejecutar la consulta en la base de datos
    const categorias = await queryAll();
    res.json(categorias);
    } catch (error) {
    res.status(500).send(error);
    }
};

/**
 * obtener el categorias con el ID especificado en la query / url
 * @param {*} req
 * @param {*} res
 */

const findController = async (req, res) => {
    try {
        //Ejecutar la consulta en la base de datos
        const categorias = await queryFind(req.params.id);
        res.json(categorias);
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Crear un categoria
 */

const createController = async (req, res) => {
    try {
        const resultado = await queryCreate(req.body);
        res.json({mensaje: "Categoria creada con exito", id: resultado.insertId });
    } catch (error){
        res.status(500).send(error);
    }
};

/**
 * Actualizar los datos de una categoria
 */

const updateController = async (req, res) =>{
    try{
        
        const resultado = await queryUpdate(req.params.id, req.body);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: "categorias actualizado con exito", categorias: resultado});
        } else {
            res.status(404).json({mensaje: "categorias no encontrado"});
        }
    } catch (error){
        res.status(500).send(error);
    }
};
  
/**
 * Eliminar una categoria
 */

const deleteController = async (req, res) => {
    try {
        
        const resultado = await queryDelete(req.params.id);
        if (resultado.affectedRows > 0){
            res.json({ mensaje: "categoria eliminado con exito"});
        } else {
            res.status(404).json({mensaje: "categoria no encontrado"});
        } 
    } catch (error){
        res.status(500).json({ mensaje: "Error al eliminar el categoria", error: error.message});
    }
};

export {
    allController,
    findController,
    createController,
    updateController,
    deleteController
};