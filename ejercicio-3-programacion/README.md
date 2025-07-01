# Ejercicio 3: Programación General

¡Hola! Este es el último ejercicio donde vas a resolver algunos problemas de JavaScript. La idea es ver cómo te movés con arrays, funciones asíncronas y algoritmos básicos.

## Cómo funciona esto

Tenés una carpeta con estos archivos:

```txt
ejercicio-3-programacion/
├── test-runner.html          # ← Abrí este en el navegador
├── data/
│   └── sample-data.js        # Datos para usar en los ejercicios
├── problemas/
│   ├── 1-arrays.js           # ← Editá este
│   ├── 2-async.js            # ← Y este
│   └── 3-algorithms.js       # ← Y este también
└── tests/
    └── test-suite.js         # No toques esto
```

## Qué tenés que hacer

1. **Abrí `test-runner.html`** en tu navegador - vas a ver que todas las funciones dicen "Not implemented"

2. **Editá los archivos** de la carpeta `problemas/` con tu editor favorito (VS Code, Vim, lo que uses)

3. **Cada vez que guardes algo**, refrescá el navegador (F5) para ver si funcionó

4. **Los resultados** se ven así:
   - ✅ = Joya, funciona perfecto
   - ❌ = Implementaste algo pero tiene un bug
   - ⚪ = Todavía no lo hiciste

## Los problemas

### 📊 Arrays (archivo `1-arrays.js`)

Son 3 funciones para trabajar con un array de transacciones:

- **`groupByCategory`** - Sumar gastos por categoría (ej: `{comida: 300, transporte: 80}`)
- **`getTopSpenders`** - Listar usuarios que más gastaron
- **`filterTransactions`** - Filtrar transacciones por plata, categoría, etc.

### ⚡ Async (archivo `2-async.js`)

Programación asíncrona, promises y esas cosas:

- **`fetchMultipleUsers`** - Traer varios usuarios en paralelo (algunos pueden fallar)
- **`processWithLimit`** - Ejecutar tareas pero máximo 2 a la vez
- **`retryWithBackoff`** - Reintentar algo que falla, con delays crecientes

### 🧠 Algoritmos (archivo `3-algorithms.js`)

Problemas más clásicos:

- **`findSecondLargest`** - El segundo número más grande (cuidado con arrays vacíos)
- **`areAnagrams`** - Si dos palabras tienen las mismas letras
- **`isPalindrome`** - Si una frase se lee igual al revés
- **`debounce`** - Retrasar ejecución de funciones

## Datos que podés usar

Ya están cargados estos datos globalmente:

```javascript
// Array de transacciones
transactions // tiene id, amount, category, userId

// Para testing
testArrays.numbers    // [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
testArrays.empty      // []
testArrays.single     // [42]

// Para APIs fake
window.mockFetch('/api/users/1') // simula llamada HTTP
```

## Tips

**Manejo del tiempo:**

- Tenés 15 minutos, no te vuelvas loco queriendo hacer todo
- Empezá por lo que te resulte más fácil
- Es mejor hacer 3 funciones bien que 8 a medias

**Si te trabás:**

- Abrí la consola del navegador (F12) para ver errores
- Usá `console.log()` para debuggear
- Cada función se testea por separado, no importa si las otras fallan

**Qué valoramos:**

- Que funcione correctamente
- Código que se entienda
- Que manejes casos raros (arrays vacíos, etc.)
- Que uses bien los métodos de JavaScript (map, filter, reduce)

**No te preocupes por:**

- Optimizar performance al extremo
- Hacer código súper fancy
- Errores de sintaxis menores

---

## ¡Dale que podés! 🚀

Si tenés alguna duda, preguntá sin drama. La idea es ver cómo pensás y resolvés problemas, no que sepas todo de memoria.
