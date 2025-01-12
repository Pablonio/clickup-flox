export const getProjectDateRange = (tasks) => {
    const startDates = tasks.map(task => new Date(task.start));
    const endDates = tasks.map(task => new Date(task.end));
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
  
  export const calculateTaskDuration = (start, end) => {
    return Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1);
  };
  
  export const calculateTimelinePosition = (taskDate, projectStartDate) => {
    return ((new Date(taskDate) - projectStartDate) / (1000 * 60 * 60 * 24)) * 96;
  };