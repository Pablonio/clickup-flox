export const verificarAcceso = (user, task) => {
    return user.nombre === "Todos" || task.responsable.includes(user.nombre);
  };