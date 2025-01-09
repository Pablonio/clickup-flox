import React, { useState } from "react";
import styles from "./styles/estilos.module.css";
import { sprints } from "../utils/sprints";

const ProjectGantt = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);

  // Función para obtener el rango de fechas del proyecto
  const getProjectDateRange = () => {
    const startDates = sprints.map(task => new Date(task.start));
    const endDates = sprints.map(task => new Date(task.end));
    const minDate = new Date(Math.min(...startDates));
    const maxDate = new Date(Math.max(...endDates));
    
    const dates = [];
    const currentDate = new Date(minDate);
    
    while (currentDate <= maxDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  };

  const dateRange = getProjectDateRange();
  const projectStartDate = dateRange[0];

  const groupedTasks = sprints.reduce((acc, task) => {
    if (!acc[task.fase]) {
      acc[task.fase] = [];
    }
    acc[task.fase].push(task);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Proyecto Desarrollo de Herramientas IA</h1>
        </div>

        <div className={styles.mainContent}>
          {/* Panel izquierdo - Lista de tareas */}
          <div className={styles.taskList}>
            <div className={styles.taskListHeader}>
              <div className={styles.taskNumber}>#</div>
              <div className={styles.taskName}>Tarea</div>
              <div className={styles.taskDuration}>Duración</div>
            </div>
            
            <div className={styles.taskListContent}>
              {Object.entries(groupedTasks).map(([phase, phaseTasks]) => (
                <div key={phase} className={styles.phaseGroup}>
                  <div 
                    className={styles.phaseHeader}
                    onClick={() => setExpandedTask(expandedTask === phase ? null : phase)}
                  >
                    <span>{expandedTask === phase ? '▼' : '▶'}</span>
                    <div className={styles.phaseName}>{phase}</div>
                  </div>
                  
                  {expandedTask === phase && phaseTasks.map((task, index) => (
                    <div
                      key={index}
                      className={styles.taskRow}
                      onMouseEnter={() => setTaskDetails(task)}
                      onMouseLeave={() => setTaskDetails(null)}
                    >
                      <div className={styles.taskIndex}>{index + 1}</div>
                      <div className={styles.taskTitle}>{task.task}</div>
                      <div className={styles.taskTime}>
                        {Math.ceil((new Date(task.end) - new Date(task.start)) / (1000 * 60 * 60 * 24) + 1)} días
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Panel derecho - Timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineWrapper}>
              {/* Header con fechas */}
              <div className={styles.timelineHeader}>
                {dateRange.map((date, index) => (
                  <div key={index} className={styles.dateCell}>
                    <span>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</span>
                    <span>{date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                  </div>
                ))}
              </div>

              {/* Contenido del timeline */}
              <div className={styles.timelineContent}>
                {Object.entries(groupedTasks).map(([phase, phaseTasks]) => (
                  <div key={phase} className={styles.phaseRow}>
                    <div className={styles.phaseBackground}></div>
                    {expandedTask === phase && phaseTasks.map((task, taskIndex) => {
                      const startDate = new Date(task.start);
                      const endDate = new Date(task.end);
                      const startOffset = ((startDate - projectStartDate) / (1000 * 60 * 60 * 24)) * 96;
                      const duration = ((endDate - startDate) / (1000 * 60 * 60 * 24) + 1) * 96;

                      return (
                        <div key={taskIndex} className={styles.taskTimelineRow}>
                          <div
                            className={styles.taskBar}
                            style={{
                              left: `${startOffset}px`,
                              width: `${duration}px`,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popup de detalles */}
        {taskDetails && (
          <div className={styles.taskDetails}>
            <h3 className={styles.taskDetailsTitle}>{taskDetails.task}</h3>
            <p className={styles.taskDetailsText}>Responsables: {taskDetails.responsable}</p>
            <p className={styles.taskDetailsText}>
              Inicio: {new Date(taskDetails.start).toLocaleDateString()}
              <br />
              Fin: {new Date(taskDetails.end).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGantt;