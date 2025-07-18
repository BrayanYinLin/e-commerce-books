## 👥 Equipo de Desarrollo

| Nombre        | Rol                     | Responsabilidad principal                               |
| ------------- | ----------------------- | ------------------------------------------------------- |
| **Brayan**    | Backend (API)           | Implementación de la API, lógica de negocio, WebSockets |
| **Jorge**     | Frontend (Angular)      | Desarrollo del e-commerce para clientes                 |
| **Daniel**    | Frontend (React)        | Desarrollo del panel de administración                  |
| **Sebastian** | Base de datos (MongoDB) | Modelado, conexión y consultas en la base de datos      |

# Chat Ecommerce - Setup

Este proyecto usa workspaces de npm y tiene tres paquetes principales:

- `client/` → Frontend para el cliente (Angular)
- `admin/` → Panel de administrador (React)
- `api/` → Backend con WebSockets (Express + socket.io)

## 🚀 Pasos para correr el proyecto

1. **Instalar dependencias en todos los paquetes**

```bash
npm install
````

2. **Construir el frontend del cliente (Angular)**

```bash
cd client
npm install # si no has instalado
npm run build
cd ..
```

3. **Construir el panel admin (React)**

```bash
cd admin
npm install # si no has instalado
npm run build
cd ..
```

4. **Levantar el backend**

```bash
cd api
npm install # si no has instalado
npm run dev
```

El backend servirá las versiones construidas de Angular y React, y manejará los sockets del chat.
