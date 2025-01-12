import { useMemo } from "react";
import { sprints } from "../../utils/sprints";
import { getProjectDateRange } from "../utils/DateUtils";
import { groupTasksByPhase } from "../utils/TaskUtils";

export const useProjectData = (user) => {
  const filteredTasks = useMemo(() => {
    if (!user) return [];
    return sprints.filter(task => 
      user.nombre === "Todos" || task.responsable.includes(user.nombre)
    );
  }, [user]);

  const groupedTasks = useMemo(() => {
    return groupTasksByPhase(filteredTasks);
  }, [filteredTasks]);

  const dateRange = useMemo(() => {
    return getProjectDateRange(sprints);
  }, []);

  const projectStartDate = dateRange[0];

  return {
    dateRange,
    groupedTasks,
    projectStartDate
  };
};