import React from 'react';
import styles from '../../styles/TimeLine.module.css';

const TimelineHeader = ({ dateRange }) => {
  return (
    <div className={styles.timelineHeader}>
      {dateRange.map((date, index) => (
        <div key={index} className={styles.dateCell}>
          <span>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</span>
          <span>{date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
        </div>
      ))}
    </div>
  );
};

export default TimelineHeader;