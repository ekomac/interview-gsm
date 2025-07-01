# Ejercicio 4: SQL Queries

## Objetivo

Escribir consultas SQL para resolver problemas de análisis de datos sobre un esquema de e-commerce.

## Instrucciones

1. Lee el archivo `queries.sql` para ver el esquema de las tablas y los enunciados de las queries.
2. Escribe una consulta SQL para cada uno de los siguientes problemas, utilizando el esquema provisto:

   - **Total gastado por cada usuario**: Calcula el monto total gastado por cada usuario considerando sus órdenes.
   - **Productos más vendidos este año**: Obtén los productos con mayor cantidad de ventas en el año en curso.
   - **Usuarios que no compraron en los últimos 6 meses**: Lista los usuarios que no realizaron ninguna compra en los últimos 6 meses.

3. Escribe cada consulta en el archivo `queries.sql` debajo del enunciado correspondiente.
4. Puedes usar cualquier motor SQL compatible (ej: PostgreSQL, MySQL, SQLite) para probar tus consultas.

## Notas

- El esquema de tablas es el siguiente:
  - `users (id, name, email, created_at)`
  - `orders (id, user_id, total, created_at)`
  - `products (id, name, price)`
  - `order_items (order_id, product_id, quantity)`
- Asegúrate de usar funciones de fecha para filtrar correctamente por año o por últimos 6 meses según el motor SQL elegido.
- Concéntrate en la claridad y eficiencia de tus consultas.
- Si tienes dudas sobre el esquema o los enunciados, consulta con tu entrevistador.
