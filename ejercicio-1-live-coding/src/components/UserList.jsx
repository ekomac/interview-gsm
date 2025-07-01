import React from 'react';
import { mockUsers } from '../data/mockUsers';

/**
 * Componente UserList
 * 
 * Requisitos:
 * 1. Mostrar lista de usuarios activos
 * 2. Input de búsqueda que filtre por nombre (case-insensitive)
 * 3. Mostrar estado de "Cargando..." por 1 segundo al inicio
 * 4. Mostrar "No se encontraron usuarios" si no hay resultados
 * 5. Cada usuario debe mostrar: nombre, email, departamento
 * 
 * Bonus:
 * - Agregar filtro por departamento
 * - Mostrar contador de usuarios encontrados
 */

const UserList = () => {
  // Implementa aquí tu solución
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Usuarios</h2>
      {/* Tu implementación aquí */}
      <p>Implementa el componente según los requisitos en los comentarios</p>
    </div>
  );
};

export default UserList;