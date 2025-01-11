import React, { useState } from "react";
import styles from "./styles/estilos.module.css";
import { sprints } from "../utils/sprints";
import { verificarAcceso } from "../utils/auth";
import Login from "../InicioSesion/InicioSesion";

const ProjectGantt = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);
  const [user, setUser] = useState(null);

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

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setTaskDetails(null);
    setExpandedTask(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Obtener tareas filtradas por usuario o mostrar todas si el usuario seleccionó "Todos"
  const filteredTasks = sprints.filter(task => 
    user.nombre === "Todos" || task.responsable.includes(user.nombre)
  );

  const groupedTasks = filteredTasks.reduce((acc, task) => {
    if (!acc[task.fase]) {
      acc[task.fase] = [];
    }
    acc[task.fase].push(task);
    return acc;
  }, {});

  const dateRange = getProjectDateRange();
  const projectStartDate = dateRange[0];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Proyecto Desarrollo de Herramientas IA</h1>
          <div className={styles.userInfo}>
            <span>Usuario: {user.nombre}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
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
                  
                  {expandedTask === phase && phaseTasks.map((task, index) => {
                    const hasAccess = verificarAcceso(user, task);
                    return (
                      <div
                        key={index}
                        className={`${styles.taskRow} ${!hasAccess ? styles.disabled : ''}`}
                        onMouseEnter={() => hasAccess && setTaskDetails(task)}
                        onMouseLeave={() => setTaskDetails(null)}
                      >
                        <div className={styles.taskIndex}>{index + 1}</div>
                        <div className={styles.taskTitle}>{task.task}</div>
                        <div className={styles.taskTime}>
                          {Math.ceil((new Date(task.end) - new Date(task.start)) / (1000 * 60 * 60 * 24) + 1)} días
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineWrapper}>
              <div className={styles.timelineHeader}>
                {dateRange.map((date, index) => (
                  <div key={index} className={styles.dateCell}>
                    <span>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</span>
                    <span>{date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                  </div>
                ))}
              </div>

              <div className={styles.timelineContent}>
                {Object.entries(groupedTasks).map(([phase, phaseTasks]) => (
                  <div key={phase} className={styles.phaseRow}>
                    <div className={styles.phaseBackground}></div>
                    {expandedTask === phase && phaseTasks.map((task, taskIndex) => {
                      const startDate = new Date(task.start);
                      const endDate = new Date(task.end);
                      const startOffset = ((startDate - projectStartDate) / (1000 * 60 * 60 * 24)) * 96;
                      const duration = ((endDate - startDate) / (1000 * 60 * 60 * 24) + 1) * 96;
                      const hasAccess = verificarAcceso(user, task);

                      return (
                        <div key={taskIndex} className={styles.taskTimelineRow}>
                          <div
                            className={`${styles.taskBar} ${!hasAccess ? styles.taskBarDisabled : ''}`}
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

        {taskDetails && verificarAcceso(user, taskDetails) && (
          <div className={styles.taskDetails}>
            <h3 className={styles.taskDetailsTitle}>{taskDetails.task}</h3>
            <div className={styles.taskDetailsContent}>
              <p className={styles.taskDetailsText}>
                <strong>Responsables:</strong>
                <span className={styles.responsablesList}>
                  {taskDetails.responsable.split(', ').map((resp, idx) => (
                    <span key={idx} className={styles.responsableTag}>
                      {resp}
                    </span>
                  ))}
                </span>
              </p>
              <p className={styles.taskDetailsText}>
                <strong>Fase:</strong> {taskDetails.fase}
              </p>
              <p className={styles.taskDetailsText}>
                <strong>Inicio:</strong> {new Date(taskDetails.start).toLocaleDateString()}
              </p>
              <p className={styles.taskDetailsText}>
                <strong>Fin:</strong> {new Date(taskDetails.end).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGantt;
