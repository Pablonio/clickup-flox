// auth.js
import { usuarios } from './usuarios';

export const verificarUsuario = (nombre, contra) => {
    const usuario = Object.values(usuarios).find((u) => u.nombre === nombre && u.contra === contra);
    if (usuario) {
        return { nombre: usuario.nombre };
    }
    return null;
};

export const verificarAcceso = (user, task) => {
    return task.responsable.includes(user.nombre);
};
