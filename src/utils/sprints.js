
import { miembros } from "../utils/miembros";
import { fases } from "../utils/fase";
import { task } from "../utils/task";

export const sprints = [
    // Fase 1: Preparación
    {
        task: `${task[0]}`,
        start: "2025-01-10",
        end: "2025-01-10",
        fase: `${fases[0]}`,
        responsable: `${miembros[0]}, ${miembros[1]}, ${miembros[2]}, ${miembros[3]}, ${miembros[4]}`
    },
    {
        task: `${task[1]}`,
        start: "2025-01-10",
        end: "2025-01-11",
        fase: `${fases[0]}`,
        responsable: `${miembros[0]}, ${miembros[1]}, ${miembros[2]}, ${miembros[3]}, ${miembros[4]}`
    },
    {
        task: `${task[2]}`,
        start: "2025-01-11",
        end: "2025-01-12",
        fase: `${fases[0]}`,
        responsable: `${miembros[0]}, ${miembros[1]}`
    },
    {
        task: `${task[3]}`,
        start: "2025-01-12",
        end: "2025-01-12",
        fase: `${fases[0]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[4]}`,
        start: "2025-01-12",
        end: "2025-01-13",
        fase: `${fases[0]}`,
        responsable: `${miembros[0]}, ${miembros[1]}`
    },
    
    // Fase 2: Desarrollo Base
    {
        task: `${task[5]}`,
        start: "2025-01-13",
        end: "2025-01-15",
        fase: `${fases[1]}`,
        responsable: `${miembros[1]}, ${miembros[2]}, ${miembros[4]}`
    },
    {
        task: `${task[6]}`,
        start: "2025-01-13",
        end: "2025-01-15",
        fase: `${fases[1]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[7]}`,
        start: "2025-01-15",
        end: "2025-01-16",
        fase: `${fases[1]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[8]}`,
        start: "2025-01-15",
        end: "2025-01-17",
        fase: `${fases[1]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[9]}`,
        start: "2025-01-16",
        end: "2025-01-17",
        fase: `${fases[1]}`,
        responsable: `${miembros[3]}`
    },
    {
        task: `${task[10]}`,
        start: "2025-01-16",
        end: "2025-01-17",
        fase: `${fases[1]}`,
        responsable: `${miembros[1]}, ${miembros[2]}, ${miembros[4]}`
    },
    
    // Fase 3: Desarrollo Principal
    {
        task: `${task[11]}`,
        start: "2025-01-17",
        end: "2025-01-20",
        fase: `${fases[2]}`,
        responsable: `${miembros[1]}, ${miembros[2]}, ${miembros[4]}`
    },
    {
        task: `${task[12]}`,
        start: "2025-01-17",
        end: "2025-01-20",
        fase: `${fases[2]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[13]}`,
        start: "2025-01-21",
        end: "2025-01-24",
        fase: `${fases[2]}`,
        responsable: `${miembros[1]}, ${miembros[2]}, ${miembros[4]}`
    },
    {
        task: `${task[14]}`,
        start: "2025-01-21",
        end: "2025-01-24",
        fase: `${fases[2]}`,
        responsable: `${miembros[0]}, ${miembros[3]}`
    },
    {
        task: `${task[15]}`,
        start: "2025-01-22",
        end: "2025-01-24",
        fase: `${fases[2]}`,
        responsable: `${miembros[1]}, ${miembros[2]}, ${miembros[4]}`
    },
    
    // Fase 4: Refinamiento
    {
        task: `${task[16]}`,
        start: "2025-01-25",
        end: "2025-01-27",
        fase: `${fases[3]}`,
        responsable: `${miembros[0]}, ${miembros[1]}, ${miembros[2]}, ${miembros[3]}, ${miembros[4]}`
    },
    {
        task: `${task[17]}`,
        start: "2025-01-28",
        end: "2025-01-30",
        fase: `${fases[3]}`,
        responsable: `${miembros[0]}, ${miembros[1]}, ${miembros[3]}`
    },
    {
        task: `${task[18]}`,
        start: "2025-01-31",
        end: "2025-02-02",
        fase: `${fases[3]}`,
        responsable: `${miembros[2]}, ${miembros[4]}`
    },
    {
        task: `${task[19]}`,
        start: "2025-02-03",
        end: "2025-02-04",
        fase: `${fases[3]}`,
        responsable: `${miembros[0]}, ${miembros[1]}, ${miembros[2]}, ${miembros[3]}, ${miembros[4]}`
    }
];