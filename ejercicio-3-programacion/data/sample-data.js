// Datos de ejemplo para los ejercicios
const transactions = [
    { id: 1, amount: 100, category: 'food', date: '2024-01-15', userId: 1 },
    { id: 2, amount: 50, category: 'transport', date: '2024-01-15', userId: 1 },
    { id: 3, amount: 200, category: 'food', date: '2024-01-16', userId: 2 },
    { id: 4, amount: 75, category: 'entertainment', date: '2024-01-16', userId: 1 },
    { id: 5, amount: 30, category: 'transport', date: '2024-01-17', userId: 2 },
    { id: 6, amount: 150, category: 'food', date: '2024-01-17', userId: 3 },
];

const testArrays = {
    numbers: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],
    empty: [],
    single: [42],
    duplicates: [5, 5, 5, 5],
    negative: [-1, -5, -2, -10, -3]
};

// Mock API para tests asíncronos
const mockUserAPI = {
    1: { id: 1, name: 'Ana García', email: 'ana@empresa.com' },
    2: { id: 2, name: 'Carlos López', email: 'carlos@empresa.com' },
    3: { id: 3, name: 'María Rodríguez', email: 'maria@empresa.com' },
    4: null, // Simula usuario no encontrado
    5: { id: 5, name: 'Juan Martín', email: 'juan@empresa.com' }
};

// Mock fetch function
function createMockFetch() {
    return function (url) {
        return new Promise((resolve, reject) => {
            const delay = Math.random() * 500 + 100; // 100-600ms delay

            setTimeout(() => {
                const match = url.match(/\/api\/users\/(\d+)/);
                if (match) {
                    const userId = parseInt(match[1]);
                    const userData = mockUserAPI[userId];

                    if (userData) {
                        resolve({
                            ok: true,
                            json: () => Promise.resolve(userData)
                        });
                    } else {
                        resolve({
                            ok: false,
                            status: 404,
                            json: () => Promise.resolve({ error: 'User not found' })
                        });
                    }
                } else {
                    reject(new Error('Invalid URL'));
                }
            }, delay);
        });
    };
}

// Hacer disponible globalmente
window.mockFetch = createMockFetch();