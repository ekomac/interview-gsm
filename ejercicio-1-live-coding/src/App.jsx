import React from 'react'
import UserList from './components/UserList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio 1: Live Coding</h1>
        <p>Implementa el componente UserList</p>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  )
}

export default App