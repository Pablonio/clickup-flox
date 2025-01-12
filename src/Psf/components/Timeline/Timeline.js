import React from 'react';
import TimelineHeader from './TimelineHeader';
import TimelineContent from './TimelineContent';
import styles from '../../styles/TimeLine.module.css';

const Timeline = ({ dateRange, groupedTasks, expandedTask, projectStartDate, user }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineWrapper}>
        <TimelineHeader dateRange={dateRange} />
        <TimelineContent
          groupedTasks={groupedTasks}
          expandedTask={expandedTask}
          projectStartDate={projectStartDate}
          user={user}
        />
      </div>
    </div>
  );
};

export default Timeline;