import config from "../../config.js"

//funcion que ayuda a manejar la respuesta de la base de datos
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};

/**
 * Carga la lista de procdedimiento
 */

const queryAll = () => {
    // una promesa es una forma de que siempre se devuelva un resultado al quin llama (sea error o exito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razon
    return new Promise((resolve, reject) => {
        config.query("SELECT * FROM recetas", (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Buscar un articulo por su ID (llave primaria)
 */

const queryFind = (id) =>{
    return new Promise((resolve, reject) => {
        config.query("SELECT * FROM recetas WHERE id = ? LIMIT 1", [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Guardar un nuevo receta
 */

const queryCreate = async (receta) =>{
    const {nombre,descripcion,tiempo, imagen } = receta;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO recetas (nombre, descripcion,tiempo, imagen) VALUES (?,?,?,?)"; 
        config.query(sql, [nombre,descripcion, tiempo, imagen], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Actualizar un receta por su ID
 */

const queryUpdate = (id, receta) =>{
    const {nombre,descripcion, tiempo, imagen } = receta;
    return new Promise((resolve, reject) => {
        const sql = "UPDATE recetas SET nombre = ?, descripcion = ?, tiempo = ?, imagen = ?  WHERE id = ?"; 
        config.query(sql, [nombre,descripcion, tiempo, imagen, id],  (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Eliminar un receta por su ID
 */

const queryDelete = (id) =>{
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM recetas WHERE id = ?"; 
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

//Exportar todas las funciones definidas ene este archivo

export{
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
}
