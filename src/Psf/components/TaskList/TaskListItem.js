// components/TaskList/TaskListItem.js
import React from 'react';
import { verificarAcceso } from '../../services/auth';
import { calculateTaskDuration } from '../../utils/DateUtils';
import styles from '../../styles/TaskList.module.css';

const TaskListItem = ({ task, index, setTaskDetails, user }) => {
  const hasAccess = verificarAcceso(user, task);
  const duration = calculateTaskDuration(task.start, task.end);

  const handleMouseEnter = (e) => {
    if (hasAccess) {
      setTaskDetails({
        task,
        position: {
          x: e.clientX + 10, // 10px offset del cursor
          y: e.clientY + 10
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setTaskDetails(null);
  };

  return (
    <div
      className={`${styles.taskRow} ${!hasAccess ? styles.disabled : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.taskIndex}>{index + 1}</div>
      <div className={styles.taskTitle}>{task.task}</div>
      <div className={styles.taskTime}>{duration} días</div>
    </div>
  );
};

export default TaskListItem;