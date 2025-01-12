import React, { useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import Timeline from "./components/Timeline/Timeline";
import TaskDetails from "./components/TaskDetails/TaskDetails";
import Login from "../InicioSesion/InicioSesion";
import { useProjectData } from "./hooks/projectData";
import styles from "./styles/Psf.module.css";

export const PaginaInicio = () => {
  const [taskDetails, setTaskDetails] = useState(null);
  const [expandedTask, setExpandedTask] = useState(null);
  const [user, setUser] = useState(null);
  
  const { dateRange, groupedTasks, projectStartDate } = useProjectData(user);

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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header user={user} onLogout={handleLogout} />
        
        <div className={styles.mainContent}>
          <TaskList 
            groupedTasks={groupedTasks}
            expandedTask={expandedTask}
            setExpandedTask={setExpandedTask}
            setTaskDetails={setTaskDetails}
            user={user}
          />
          
          <Timeline 
            dateRange={dateRange}
            groupedTasks={groupedTasks}
            expandedTask={expandedTask}
            projectStartDate={projectStartDate}
            user={user}
          />
        </div>

        {taskDetails && (
          <TaskDetails 
            task={taskDetails.task} 
            user={user} 
            position={taskDetails.position}
          />
        )}
      </div>
    </div>
  );
};
