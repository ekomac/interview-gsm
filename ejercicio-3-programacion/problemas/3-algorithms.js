/**
 * PROBLEMA 1: Segundo Número Más Grande
 * 
 * Encontrar el segundo número más grande en un array.
 * 
 * Edge cases a considerar:
 * - Array vacío -> null
 * - Un solo elemento -> null  
 * - Todos elementos iguales -> null
 * - Números negativos
 * 
 * Ejemplo:
 * findSecondLargest([3, 1, 4, 1, 5, 9, 2, 6]) -> 6
 */
function findSecondLargest(numbers) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 2: Anagramas
 * 
 * Determinar si dos strings son anagramas (mismas letras, diferente orden).
 * 
 * Consideraciones:
 * - Case insensitive
 * - Ignorar espacios
 * - "listen" y "silent" son anagramas
 * 
 * Ejemplo:
 * areAnagrams("Listen", "Silent") -> true
 */
function areAnagrams(str1, str2) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 3: Palíndromo con Caracteres Especiales
 * 
 * Verificar si una frase es palíndromo ignorando espacios, puntuación y case.
 * 
 * Ejemplos:
 * - "A man a plan a canal Panama" -> true
 * - "race a car" -> false
 * 
 * @param {string} str - String a verificar
 */
function isPalindrome(str) {
    throw new Error('Not implemented');
}

/**
 * PROBLEMA 4: Implementar debounce
 * 
 * Crear función debounce que retrasa la ejecución de una función
 * hasta que hayan pasado N milisegundos desde la última vez que fue invocada.
 * 
 * Ejemplo:
 * const debouncedFn = debounce(() => console.log('Hello'), 1000);
 * debouncedFn(); // No ejecuta inmediatamente
 * debouncedFn(); // Cancela anterior, programa nueva ejecución
 * // Después de 1000ms sin más llamadas -> ejecuta "Hello"
 */
function debounce(func, delay) {
    throw new Error('Not implemented');
}