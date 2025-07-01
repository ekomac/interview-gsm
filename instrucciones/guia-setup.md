# Guía de Setup

## Requisitos del Sistema
- Node.js 18 o superior
- Git
- Editor de código (VS Code recomendado)

## Proceso de Setup

1. **Clonar repositorio:**

```bash
git clone https://github.com/[empresa]/interview-exercises.git
cd interview-exercises
```

2. **Para cada ejercicio, navegar al directorio e instalar:**

```bash
cd ejercicio-1-live-coding
npm install
npm run dev
```

## Verificación de Funcionamiento

- El servidor de desarrollo debe abrir automáticamente en el navegador
- Ejercicio 1: Puerto 3001
- Ejercicio 2: Puerto 3002

## Solución de Problemas Comunes

### Error de permisos con npm

```bash
npm config set registry https://registry.npmjs.org/
npm cache clean --force
```

### Puerto ocupado

Los ejercicios usan puertos diferentes (3001, 3002) para evitar conflictos.

### Node.js versión antigua

- Verificar versión: `node --version`
- Actualizar si es menor a 18.0.0