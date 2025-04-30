npx knex --knexfile knexfile.cjs migrate:latest
npx knex --knexfile knexfile.cjs migrate:latest --env test


# 🔪 Product Testing API

Una API RESTful construida con Node.js siguiendo los principios de arquitectura DDD (Domain-Driven Design), utilizando Express y Knex para la base de datos.

---

## 📦 Estructura del proyecto

```
├──src/
│   │
│   ├── products/
│   │     ├── application/
│   │     ├── domain/     
│   │     ├── infrastructure/ 
│   │     ├── interfaces/     
│   ├── testers/
│   │     ├── ***
│   ├── tests/
│   │     ├── ***
│   ├── shared/               
├── tests/                
└── migrations/           
```

---

## ✨ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear el archivo `.env` 

Hay un .env.example como muestra

```env
# .env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=test_db
```

### 4. Ejecutar migraciones

```bash
npx knex --knexfile knexfile.cjs migrate:latest
```
Para entorno de test:
```bash
npx knex --knexfile knexfile.cjs migrate:latest --env test 
```

### 5. Iniciar el servidor

```bash
npm run dev
```

---

## 🔪 Pruebas

Ejecuta las pruebas con:

```bash
npm run test
```

---

## 📚 Paquetes utilizados

| Paquete                | Propósito                                         |
|------------------------|---------------------------------------------------|
| **express**            | Servidor HTTP                                     |
| **knex**               | Query builder SQL                                 |
| **mysql2**             | Driver de conexión MySQL                          |
| **dotenv**             | Variables de entorno                              |
| **vitest**             | Testing framework ligero y moderno                |
| **supertest**          | Pruebas de endpoints HTTP                         |


---

## 🧩 Arquitectura

- **DDD**: División clara entre dominio, aplicación, infraestructura e interfaces.
- **Value Objects**: Validación estricta del dominio (e.g., `SizeType`, `LogoType`).
- **Repository Pattern**: Acceso a la base de datos encapsulado en repositorios.
- **Use Cases**: Cada operación de negocio es un caso de uso independiente.

---

## 👨‍💼 Autor

Xavier Sureda

