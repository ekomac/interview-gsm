import React, { useState } from 'react'
import ProjectDashboard from './components/ProjectDashboard'
import './App.css'

// Mock de datos para simular la respuesta de la API
window.mockApiResponses = {
  projects: {
    1: { id: 1, name: 'Proyecto Alpha', description: 'Sistema de gestión interno' },
    2: { id: 2, name: 'Proyecto Beta', description: 'Aplicación móvil' }
  },
  tasks: {
    1: [
      { id: 1, title: 'Diseñar base de datos', completed: false, projectId: 1 },
      { id: 2, title: 'Implementar autenticación', completed: true, projectId: 1 },
      { id: 3, title: 'Crear interfaz de usuario', completed: false, projectId: 1 },
      { id: 4, title: 'Testing y deployment', completed: false, projectId: 1 }
    ],
    2: [
      { id: 5, title: 'Configurar React Native', completed: true, projectId: 2 },
      { id: 6, title: 'Integrar APIs', completed: false, projectId: 2 }
    ]
  }
};

// Mock de fetch global
window.fetch = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (url.includes('/api/projects/') && url.includes('/tasks')) {
        const projectId = url.match(/\/api\/projects\/(\d+)\/tasks/)[1];
        const tasks = window.mockApiResponses.tasks[projectId] || [];
        resolve({
          ok: true,
          json: () => Promise.resolve(tasks)
        });
      } else if (url.includes('/api/projects/')) {
        const projectId = url.match(/\/api\/projects\/(\d+)/)[1];
        const project = window.mockApiResponses.projects[projectId];
        resolve({
          ok: true,
          json: () => Promise.resolve(project)
        });
      } else if (url.includes('/api/tasks/') && url.includes('/complete')) {
        resolve({
          ok: true,
          json: () => Promise.resolve({ success: true })
        });
      }
    }, Math.random() * 500 + 200); // Simular latencia de red
  });
};

function App() {
  const [selectedProject, setSelectedProject] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio 2: Code Review</h1>
        <p>Revisa el componente ProjectDashboard e identifica problemas</p>
        
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="project-select">Seleccionar proyecto: </label>
          <select 
            id="project-select"
            value={selectedProject} 
            onChange={(e) => setSelectedProject(Number(e.target.value))}
          >
            <option value={1}>Proyecto Alpha</option>
            <option value={2}>Proyecto Beta</option>
          </select>
        </div>
      </header>
      
      <main>
        <ProjectDashboard projectId={selectedProject} />
      </main>
    </div>
  )
}

export default App