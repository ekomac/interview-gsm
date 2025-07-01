/**
 * PROBLEMA 1: Fetch Múltiple con Manejo de Errores
 * 
 * Implementar función que:
 * 1. Haga fetch de múltiples usuarios en paralelo
 * 2. Maneje errores individuales (no falle todo si uno falla)
 * 3. Retorne solo los datos exitosos
 * 4. Use la función window.mockFetch proporcionada
 * 
 * Ejemplo de uso:
 * const users = await fetchMultipleUsers([1, 2, 4, 5]); // 4 no existe
 * // Debería retornar array con 3 usuarios válidos
 */
async function fetchMultipleUsers(userIds) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 2: Rate Limiting
 * 
 * Implementar función que procese un array de tareas async pero con límite
 * de concurrencia (máximo N tareas ejecutándose simultáneamente).
 * 
 * Ejemplo: processWithLimit([task1, task2, task3, task4], 2)
 * Debe ejecutar máximo 2 tareas a la vez.
 * 
 * @param {Array<Function>} asyncTasks - Array de funciones async
 * @param {number} concurrencyLimit - Máximo de tareas concurrentes
 */
async function processWithLimit(asyncTasks, concurrencyLimit) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 3: Retry con Backoff
 * 
 * Implementar función que reintente una operación async con:
 * - Máximo 3 intentos
 * - Delay exponencial: 1s, 2s, 4s
 * - Solo reintentar en ciertos tipos de error
 * 
 * @param {Function} asyncFunction - Función async a ejecutar
 * @param {number} maxRetries - Máximo número de reintentos
 */
async function retryWithBackoff(asyncFunction, maxRetries = 3) {
    throw new Error('Not implemented');
}