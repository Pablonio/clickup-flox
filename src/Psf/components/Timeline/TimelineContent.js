import React from 'react';
import { verificarAcceso } from '../../services/auth';
import { calculateTimelinePosition } from '../../utils/DateUtils';
import styles from '../../styles/TimeLine.module.css';

const TimelineContent = ({ groupedTasks, expandedTask, projectStartDate, user }) => {
  return (
    <div className={styles.timelineContent}>
      {Object.entries(groupedTasks).map(([phase, phaseTasks]) => (
        <div key={phase} className={styles.phaseRow}>
          <div className={styles.phaseBackground}></div>
          {expandedTask === phase && phaseTasks.map((task, taskIndex) => {
            const startOffset = calculateTimelinePosition(task.start, projectStartDate);
            const duration = calculateTimelinePosition(task.end, new Date(task.start));
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
  );
};

export default TimelineContent;