import React from 'react';
import PhaseGroup from './PhaseGroup';
import styles from '../../styles/TaskList.module.css';

const TaskList = ({ groupedTasks, expandedTask, setExpandedTask, setTaskDetails, user }) => {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
        <div className={styles.taskNumber}>#</div>
        <div className={styles.taskName}>Tarea</div>
        <div className={styles.taskDuration}>Duración</div>
      </div>
      
      <div className={styles.taskListContent}>
        {Object.entries(groupedTasks).map(([phase, phaseTasks]) => (
          <PhaseGroup
            key={phase}
            phase={phase}
            tasks={phaseTasks}
            expanded={expandedTask === phase}
            onToggle={() => setExpandedTask(expandedTask === phase ? null : phase)}
            setTaskDetails={setTaskDetails}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
