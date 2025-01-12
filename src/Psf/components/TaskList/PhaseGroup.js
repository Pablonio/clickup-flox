import React from 'react';
import TaskListItem from './TaskListItem';
import styles from '../../styles/TaskList.module.css';

const PhaseGroup = ({ phase, tasks, expanded, onToggle, setTaskDetails, user }) => {
  return (
    <div className={styles.phaseGroup}>
      <div className={styles.phaseHeader} onClick={onToggle}>
        <span>{expanded ? '▼' : '▶'}</span>
        <div className={styles.phaseName}>{phase}</div>
      </div>
      {expanded && tasks.map((task, index) => (
        <TaskListItem
          key={index}
          task={task}
          index={index}
          setTaskDetails={setTaskDetails}
          user={user}
        />
      ))}
    </div>
  );
};

export default PhaseGroup;