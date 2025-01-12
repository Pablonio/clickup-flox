// components/TaskDetails/TaskDetails.js
import React, { useRef, useEffect } from 'react';
import { verificarAcceso } from '../../services/auth';
import styles from '../../styles/TaskDetails.module.css';

const TaskDetails = ({ task, user, position }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      // Ajustar posición para evitar que el modal se salga de la ventana
      const rect = modalRef.current.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      let finalTop = position.y;
      let finalLeft = position.x;

      // Ajustar posición vertical
      if (position.y + rect.height > viewport.height) {
        finalTop = viewport.height - rect.height - 10;
      }

      // Ajustar posición horizontal
      if (position.x + rect.width > viewport.width) {
        finalLeft = position.x - rect.width;
      }

      modalRef.current.style.top = `${finalTop}px`;
      modalRef.current.style.left = `${finalLeft}px`;
    }
  }, [position]);

  if (!task || !verificarAcceso(user, task)) return null;

  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.taskDetailsModal}>
        <h3 className={styles.taskDetailsTitle}>{task.task}</h3>
        <div className={styles.taskDetailsContent}>
          <p className={styles.taskDetailsText}>
            <strong>Responsables:</strong>
            <span className={styles.responsablesList}>
              {task.responsable.split(', ').map((resp, idx) => (
                <span key={idx} className={styles.responsableTag}>
                  {resp}
                </span>
              ))}
            </span>
          </p>
          <p className={styles.taskDetailsText}>
            <strong>Fase:</strong> {task.fase}
          </p>
          <p className={styles.taskDetailsText}>
            <strong>Inicio:</strong> {new Date(task.start).toLocaleDateString()}
          </p>
          <p className={styles.taskDetailsText}>
            <strong>Fin:</strong> {new Date(task.end).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;