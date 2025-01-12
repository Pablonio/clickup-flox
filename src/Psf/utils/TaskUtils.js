export const groupTasksByPhase = (tasks) => {
    return tasks.reduce((acc, task) => {
      if (!acc[task.fase]) {
        acc[task.fase] = [];
      }
      acc[task.fase].push(task);
      return acc;
    }, {});
  };