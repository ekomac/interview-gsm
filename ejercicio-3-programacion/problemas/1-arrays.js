/**
 * PROBLEMA 1: Agrupación por Categoría
 * 
 * Dado un array de transacciones, devolver un objeto con el total gastado por categoría.
 * 
 * Ejemplo:
 * Input: [
 *   { id: 1, amount: 100, category: 'food' },
 *   { id: 2, amount: 50, category: 'transport' },
 *   { id: 3, amount: 200, category: 'food' }
 * ]
 * 
 * Output: { food: 300, transport: 50 }
 */
function groupByCategory(transactions) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 2: Top Gastadores
 * 
 * Dado un array de transacciones, devolver un array con los IDs de usuarios
 * ordenados por total gastado (mayor a menor).
 * 
 * Ejemplo:
 * Input: [
 *   { userId: 1, amount: 100 },
 *   { userId: 2, amount: 200 },
 *   { userId: 1, amount: 50 }
 * ]
 * 
 * Output: [2, 1] (user 2 gastó 200, user 1 gastó 150)
 */
function getTopSpenders(transactions) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 3: Filtro Avanzado
 * 
 * Devolver transacciones que cumplan TODOS los criterios opcionales:
 * - Si minAmount está definido: amount >= minAmount
 * - Si maxAmount está definido: amount <= maxAmount  
 * - Si categories está definido: category está en el array
 * - Si userId está definido: userId coincide
 * 
 * Ejemplo:
 * filterTransactions(transactions, { minAmount: 100, categories: ['food'] })
 * // Devuelve solo transacciones de comida >= 100
 */
function filterTransactions(transactions, filters = {}) {
    throw new Error('Not implemented');
}