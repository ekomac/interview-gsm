import React, { useState, useEffect } from 'react';

const ProjectDashboard = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    fetch(`/api/projects/${projectId}`)
      .then(res => res.json())
      .then(data => {
        setProject(data);
        
        return fetch(`/api/projects/${projectId}/tasks`);
      })
      .then(res => res.json())
      .then(tasksData => {
        setTasks(tasksData);
        setLoading(false);
      });
  }, [projectId]);

  const handleTaskComplete = (taskId) => {
    fetch(`/api/tasks/${taskId}/complete`, { method: 'POST' });
    
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  const calculateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed);
    return (completedTasks.length / tasks.length) * 100;
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Progreso: {calculateProgress().toFixed(1)}%</p>
      
      <div>
        <h3>Tareas ({tasks.length}):</h3>
        {tasks.map(task => (
          <div key={task.id} style={{ 
            padding: '10px', 
            border: '1px solid #ccc',
            margin: '5px 0',
            backgroundColor: task.completed ? '#d4edda' : '#fff'
          }}>
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none' 
            }}>
              {task.title}
            </span>
            {!task.completed && (
              <button 
                onClick={() => handleTaskComplete(task.id)}
                style={{ 
                  marginLeft: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Completar
              </button>
            )}
          </div>
        ))}
        
        {tasks.length === 0 && !loading && (
          <p>No hay tareas para este proyecto</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;