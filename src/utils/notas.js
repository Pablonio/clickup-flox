let notas = {};

export const agregarNota = (tarea, usuario, texto) => {
    if (!notas[tarea]) {
        notas[tarea] = [];
    }
    notas[tarea].push({
        usuario,
        texto,
        fecha: new Date().toISOString()
    });
};

export const obtenerNotas = (tarea) => {
    return notas[tarea] || [];
};
