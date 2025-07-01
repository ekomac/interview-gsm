class TestRunner {
    constructor() {
        this.results = {
            total: 0,
            passed: 0,
            failed: 0,
            notImplemented: 0
        };
    }

    showResult(containerId, testName, status, message, error = null) {
        const container = document.getElementById(containerId);
        const testCase = document.createElement('div');

        let className, icon;
        switch (status) {
            case 'pass':
                className = 'test-case pass';
                icon = '✅';
                this.results.passed++;
                break;
            case 'fail':
                className = 'test-case fail';
                icon = '❌';
                this.results.failed++;
                break;
            case 'not-implemented':
                className = 'test-case not-implemented';
                icon = '⚪';
                this.results.notImplemented++;
                break;
        }

        this.results.total++;

        const errorMsg = error ? `<div class="error">Error: ${error}</div>` : '';
        testCase.className = className;
        testCase.innerHTML = `<strong>${icon} ${testName}</strong><br>${message}${errorMsg}`;

        container.appendChild(testCase);
        this.updateSummary();
    }

    updateSummary() {
        const { total, passed, failed, notImplemented } = this.results;
        const completed = passed + failed;
        const percentage = total > 0 ? Math.round((passed / total) * 100) : 0;

        document.getElementById('summary').innerHTML =
            `${passed}/${total} tests pasaron (${percentage}%) | ❌ ${failed} fallaron | ⚪ ${notImplemented} sin implementar`;
    }

    async runTest(containerId, testName, testFn) {
        try {
            const result = await testFn();
            if (result === true) {
                this.showResult(containerId, testName, 'pass', 'Pasó correctamente');
            } else {
                this.showResult(containerId, testName, 'fail', result || 'Test falló');
            }
        } catch (error) {
            if (error.message === 'Not implemented') {
                this.showResult(containerId, testName, 'not-implemented', 'Función no implementada');
            } else {
                this.showResult(containerId, testName, 'fail', 'Error en la ejecución', error.message);
            }
        }
    }

    async runAllTests() {
        // Tests de Arrays
        await this.runTest('arrays-tests', 'groupByCategory - casos básicos', () => {
            const result = groupByCategory(transactions);
            const expected = { food: 450, transport: 80, entertainment: 75 };
            return JSON.stringify(result) === JSON.stringify(expected) ||
                `Esperado: ${JSON.stringify(expected)}, Obtenido: ${JSON.stringify(result)}`;
        });

        await this.runTest('arrays-tests', 'getTopSpenders - ordenamiento correcto', () => {
            const result = getTopSpenders(transactions);
            // User 1: 100+50+75=225, User 2: 200+30=230, User 3: 150
            const expected = [2, 1, 3];
            return JSON.stringify(result) === JSON.stringify(expected) ||
                `Esperado: ${JSON.stringify(expected)}, Obtenido: ${JSON.stringify(result)}`;
        });

        await this.runTest('arrays-tests', 'filterTransactions - múltiples filtros', () => {
            const result = filterTransactions(transactions, { minAmount: 100, categories: ['food'] });
            const isValid = result.length === 2 && result.every(t => t.amount >= 100 && t.category === 'food');
            return isValid || `Esperado 2 transacciones de comida >= 100, obtenido: ${result.length}`;
        });

        // Tests Async
        await this.runTest('async-tests', 'fetchMultipleUsers - manejo de errores', async () => {
            const result = await fetchMultipleUsers([1, 2, 4, 5]); // 4 no existe
            const isValid = Array.isArray(result) && result.length === 3 && result.every(user => user && user.id);
            return isValid || `Esperado 3 usuarios válidos, obtenido: ${JSON.stringify(result)}`;
        });

        await this.runTest('async-tests', 'processWithLimit - límite de concurrencia', async () => {
            let concurrent = 0;
            let maxConcurrent = 0;

            const tasks = Array(5).fill().map(() => async () => {
                concurrent++;
                maxConcurrent = Math.max(maxConcurrent, concurrent);
                await new Promise(resolve => setTimeout(resolve, 50));
                concurrent--;
                return 'done';
            });

            await processWithLimit(tasks, 2);
            return maxConcurrent <= 2 || `Límite violado: ${maxConcurrent} tareas concurrentes (máximo 2)`;
        });

        await this.runTest('async-tests', 'retryWithBackoff - reintentos exponenciales', async () => {
            let attempts = 0;
            const failingFunction = async () => {
                attempts++;
                if (attempts < 3) {
                    throw new Error('Temporary failure');
                }
                return 'success';
            };

            const result = await retryWithBackoff(failingFunction, 3);
            return (result === 'success' && attempts === 3) ||
                `Esperado 3 intentos y éxito, obtenido: ${attempts} intentos`;
        });

        // Tests Algorithms
        await this.runTest('algorithms-tests', 'findSecondLargest - casos edge', () => {
            const tests = [
                { input: [3, 1, 4, 1, 5, 9, 2, 6], expected: 6 },
                { input: [], expected: null },
                { input: [5], expected: null },
                { input: [5, 5, 5], expected: null }
            ];

            for (let test of tests) {
                const result = findSecondLargest(test.input);
                if (result !== test.expected) {
                    return `Falló para ${JSON.stringify(test.input)}: esperado ${test.expected}, obtenido ${result}`;
                }
            }
            return true;
        });

        await this.runTest('algorithms-tests', 'areAnagrams - case insensitive', () => {
            const test1 = areAnagrams('Listen', 'Silent');
            const test2 = !areAnagrams('hello', 'world');
            const test3 = areAnagrams('A gentleman', 'Elegant man');

            if (!test1) return 'Falló: "Listen" y "Silent" deberían ser anagramas';
            if (!test2) return 'Falló: "hello" y "world" NO deberían ser anagramas';
            if (!test3) return 'Falló: "A gentleman" y "Elegant man" deberían ser anagramas';

            return true;
        });

        await this.runTest('algorithms-tests', 'isPalindrome - frases complejas', () => {
            const test1 = isPalindrome('A man a plan a canal Panama');
            const test2 = !isPalindrome('race a car');
            const test3 = isPalindrome('Was Otto saw?');

            if (!test1) return 'Falló: "A man a plan a canal Panama" debería ser palíndromo';
            if (!test2) return 'Falló: "race a car" NO debería ser palíndromo';
            if (!test3) return 'Falló: "Was Otto saw?" debería ser palíndromo';

            return true;
        });

        await this.runTest('algorithms-tests', 'debounce - delay correcto', async () => {
            let called = 0;
            const debouncedFn = debounce(() => called++, 100);

            debouncedFn();
            debouncedFn();
            debouncedFn();

            await new Promise(resolve => setTimeout(resolve, 150));
            return called === 1 || `Esperado 1 llamada, obtenido ${called}`;
        });
    }
}

// Ejecutar tests cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const runner = new TestRunner();
    runner.runAllTests();
});

// Log datos disponibles
console.log('📊 Datos de ejemplo disponibles:');
console.log('transactions:', transactions);
console.log('testArrays:', testArrays);
console.log('mockUserAPI:', mockUserAPI);
console.log('Usa window.mockFetch(url) para simular API calls');