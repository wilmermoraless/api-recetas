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
        config.query("SELECT * FROM procedimientos", (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Buscar un articulo por su ID (llave primaria)
 */

const queryFind = (id) =>{
    return new Promise((resolve, reject) => {
        config.query("SELECT * FROM procedimientos WHERE id = ? LIMIT 1", [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Guardar un nuevo procedimiento
 */

const queryCreate = async (procedimiento) =>{
    const {nombre, tiempo } = procedimiento;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO procedimientos (nombre, tiempo) VALUES (?,?)"; 
        config.query(sql, [nombre, tiempo], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Actualizar un procedimiento por su ID
 */

const queryUpdate = (id, procedimiento) =>{
    const {nombre, tiempo } = procedimiento;
    return new Promise((resolve, reject) => {
        const sql = "UPDATE procedimientos SET nombre = ?, tiempo = ? WHERE id = ?"; 
        config.query(sql, [nombre, tiempo, id],  (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Eliminar un procedimiento por su ID
 */

const queryDelete = (id) =>{
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM procedimientos WHERE id = ?"; 
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
